import { Test } from '@nestjs/testing';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { UtilsService } from '../../services/utils/utils.service';
import { ConfigService } from '../../services/config/config.service';
import { UtilsModule } from '../../services/utils/utils.module';
import { START_DATE, PRECISION } from '../../services/utils/utils.constants';

describe('CartsController', () => {
    let cartsController: CartsController;
    let cartsService: CartsService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [UtilsModule],
            controllers: [CartsController],
            providers: [
                CartsService, 
                ConfigService, 
                UtilsService,
                {
                    provide: 'Constants',
                    useValue: {
                      START_DATE,
                      PRECISION,
                    },
                  },],
          }).compile();
    
        cartsService = moduleRef.get<CartsService>(CartsService);
        cartsController = moduleRef.get<CartsController>(CartsController);
      });
    
      describe('CartsController', () => {

        it('should be defined', () => {
            expect(cartsController).toBeDefined();
          });
        // it('should return string', async () => {
        //   const result = 'This action returns all carts';
        //   jest.spyOn(cartsService, 'findAll').mockImplementation(() => result);
    
        //   expect(await cartsController.findAll()).toBe(result);
        // });
      });
})