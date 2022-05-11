import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ClientsModule.registerAsync([
      {
        name: 'CUSTOMER',
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.REDIS,
          options: {
            url: configService.get<string>('REDIS_URL'),
          },
        }),
      },
      {
        name: 'SUBSCRIPTION',
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.REDIS,
          options: {
            url: configService.get<string>('REDIS_URL'),
          },
        }),
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
