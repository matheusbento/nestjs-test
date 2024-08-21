import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const product = this.repository.create(createProductDto);
    return product.save();
  }

  findAll(options: IPaginationOptions) {
    const queryBuilder = this.repository.createQueryBuilder();

    return paginate<Product>(queryBuilder, options);
  }

  async findOne(id: string) {
    const product = await this.repository.findOneBy({ id });

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.repository.findOneBy({ id });

    if (!product) {
      throw new Error('Product not found');
    }

    Object.assign(product, updateProductDto);

    return await this.repository.save(product);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
