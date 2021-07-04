import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid'
import * as config from 'config';
import { CreateUrlDto } from './dtos/create-url.dto';
import { Url, UrlDocument } from './url.schema';
import { DomainService } from '../domain/domain.service';


@Injectable()
export class UrlService {

    constructor(@InjectModel('Url') private urlModel: Model<UrlDocument>, private domainService: DomainService) { }

    async createUrl(createUrlDto: CreateUrlDto): Promise<Url> {

        const { originalUrl } = createUrlDto;

        const domain = await this.domainService.extractDomainName(originalUrl);
        this.domainService.incrementTimesVisitedDomain(domain);

        const url = await this.urlModel.findOne({
            originalUrl
        });

        if (url) {
            return url;
        }

        const shortUrl = `${config.get('host')}:${config.get('port')}/url/${nanoid(8)}`;
        const createdUrl = new this.urlModel({ originalUrl, shortUrl });
        return createdUrl.save();
    }

    async getOriginalUrl(shortUrlCode: string): Promise<Url> {

        const shortUrl = `${config.get('host')}:${config.get('port')}/url/${shortUrlCode}`;
        const url = await this.urlModel.findOne({ shortUrl });
        if (!url) throw new NotFoundException(`${shortUrl} does not exist.`);
        const domain = await this.domainService.extractDomainName(url.originalUrl);
        this.domainService.incrementTimesVisitedDomain(domain);
        return url;
    }


}
