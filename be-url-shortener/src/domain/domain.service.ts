import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';
import { Domain, DomainDocument } from './domain.schema';
import { GetPopularDomainsDto } from './dtos/get-popular-domains';

@Injectable()
export class DomainService {
    constructor(@InjectModel('Domain') private domainModel: Model<DomainDocument>) { }

    async getPopularDomains(getPopularDomainsDto: GetPopularDomainsDto): Promise<Domain[]> {

        const { pageNumber, pageLimit } = getPopularDomainsDto;
        const domains = await this.domainModel.find().sort('-timesVisited').skip((pageNumber - 1) * pageLimit).limit(+pageLimit);
        return domains;
    }


    async extractDomainName(url: string) {
        let domain = new URL(url).hostname;
        if (domain.startsWith("www.")) {
            domain = domain.replace("www.", "");
        }
        return domain;
    }

    async incrementTimesVisitedDomain(domainName: string): Promise<void> {
        const domain = await this.domainModel.findOne({ domainName });

        if (!domain) {
            const newDomain = new this.domainModel({
                domainName,
                firstVisited: moment().toDate(),
                timesVisited: 1
            });
            newDomain.save();
        } else {
            //check if it was visited in the last 24 hours
            if (moment().diff(moment(domain.firstVisited), 'hours') > 24) {
                domain.firstVisited = moment().toDate();
                domain.timesVisited = 1;
                domain.save();
            } else {
                domain.timesVisited++;
                domain.save();
            }
        }
    }
}
