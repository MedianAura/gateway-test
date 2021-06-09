import { Test, TestingModule } from '@nestjs/testing';
import { DGateway } from './d.gateway';

describe('DGateway', () => {
  let gateway: DGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DGateway],
    }).compile();

    gateway = module.get<DGateway>(DGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
