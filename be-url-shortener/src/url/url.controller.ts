import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { CreateUrlDto } from './dtos/create-url.dto';
import { Url } from './url.schema';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {

    constructor(private readonly urlService: UrlService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async createUrl(@Body() createUrlDto: CreateUrlDto): Promise<Url> {
        return this.urlService.createUrl(createUrlDto);
    }

    @Get('/:shortUrlCode')
    async getOriginalUrl(@Param("shortUrlCode") shortUrlCode: string, @Res() res): Promise<void> {
        const url = await this.urlService.getOriginalUrl(shortUrlCode);
        return res.redirect(url.originalUrl);

    }


}
