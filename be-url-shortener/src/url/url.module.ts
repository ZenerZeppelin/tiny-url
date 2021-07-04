import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainModule } from '../domain/domain.module';
import { UrlController } from './url.controller';
import { UrlSchema } from './url.schema';
import { UrlService } from './url.service';

@Module({
  imports: [MongooseModule.forFeature([{ schema: UrlSchema, name: 'Url' }]), DomainModule],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule { }
