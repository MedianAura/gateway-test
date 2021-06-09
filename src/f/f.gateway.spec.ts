import { Test, TestingModule } from '@nestjs/testing';
import { FGateway } from './f.gateway';

describe('FGateway', () => {
  let gateway: FGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FGateway],
    }).compile();

    gateway = module.get<FGateway>(FGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
