import { Test, TestingModule } from '@nestjs/testing';
import { BGateway } from './b.gateway';

describe('BGateway', () => {
  let gateway: BGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BGateway],
    }).compile();

    gateway = module.get<BGateway>(BGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
