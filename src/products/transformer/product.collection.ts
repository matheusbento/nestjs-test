import { Pagination } from 'nestjs-typeorm-paginate';
import { Product } from '../entities/product.entity';
import { ProductTransformer } from './product.transfomer';

export class ProductCollectionTransformer {
  private product: Pagination<Product> = null;
  constructor(private readonly app: Pagination<Product>) {
    this.product = app;
  }

  resolve = () => {
    return {
      items: this.mapItem(),
      meta: this.product.meta,
    };
  };

  mapItem = () => {
    return this.product.items.map((element) => {
      return new ProductTransformer(element).resolve();
    });
  };
}
