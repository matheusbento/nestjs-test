import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;
  let repository: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository, // Use mock repository
        },
      ],
    }).compile();

    productsController = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
    repository = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result: any = ['test'];
      jest.spyOn(productsService, 'findAll').mockResolvedValue(result);

      expect(await productsController.findAll()).toBe(result);
    });
  });

  // Add other tests here (e.g., findOne, create, update, remove)
});
