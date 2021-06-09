import { Test, TestingModule } from '@nestjs/testing';
import { CGateway } from './c.gateway';

describe('CGateway', () => {
  let gateway: CGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CGateway],
    }).compile();

    gateway = module.get<CGateway>(CGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
