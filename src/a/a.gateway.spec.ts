import { Test, TestingModule } from '@nestjs/testing';
import { AGateway } from './a.gateway';

describe('AGateway', () => {
  let gateway: AGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AGateway],
    }).compile();

    gateway = module.get<AGateway>(AGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
