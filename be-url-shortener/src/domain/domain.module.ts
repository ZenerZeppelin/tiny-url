import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';
import { DomainController } from './domain.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DomainSchema } from './domain.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: DomainSchema, name: 'Domain' }])],
  providers: [DomainService],
  controllers: [DomainController],
  exports: [MongooseModule.forFeature([{ schema: DomainSchema, name: 'Domain' }]), DomainService]
})
export class DomainModule { }
