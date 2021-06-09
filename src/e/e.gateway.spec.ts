import { Test, TestingModule } from '@nestjs/testing';
import { EGateway } from './e.gateway';

describe('EGateway', () => {
  let gateway: EGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EGateway],
    }).compile();

    gateway = module.get<EGateway>(EGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
