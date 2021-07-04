import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Domain } from './domain.schema';
import { DomainService } from './domain.service';
import { GetPopularDomainsDto } from './dtos/get-popular-domains';

@Controller('domain')
export class DomainController {
    constructor(private domainService: DomainService) { }

    @Get('/')
    @UsePipes(new ValidationPipe({ transformOptions: { enableImplicitConversion: true } }))
    async getPopularDomains(@Query() getPopularDomainsDto: GetPopularDomainsDto): Promise<Domain[]> {
        return this.domainService.getPopularDomains(getPopularDomainsDto);
    }
}
