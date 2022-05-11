import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { generateCrudService } from '../utils/crud.generic';

@Injectable()
export class ProductService extends generateCrudService(Product) {}
