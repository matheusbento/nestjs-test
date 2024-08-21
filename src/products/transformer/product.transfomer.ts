import { Product } from '../entities/product.entity';

export class ProductTransformer {
  private product: Product = null;
  constructor(private readonly app: Product) {
    this.product = app;
  }

  resolve = () => {
    return {
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      stock: this.product.stock,
      createdAt: this.product.createdAt,
    };
  };
}
