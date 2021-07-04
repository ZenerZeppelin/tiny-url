import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as config from 'config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from './url/url.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [MongooseModule.forRoot(config.get('db')), UrlModule, DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
