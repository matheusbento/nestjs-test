import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { DataSource } from 'typeorm';

describe('ProductsService', () => {
  let service: ProductsService;
  let dataSource: DataSource;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Product],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Product]),
      ],
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    dataSource = module.get<DataSource>(DataSource);
  }, 10000);

  afterEach(async () => {
    await dataSource.destroy(); // Close the DataSource after each test to avoid memory leaks
  }, 10000);

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
