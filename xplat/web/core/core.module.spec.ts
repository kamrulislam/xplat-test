import { KiCoreModule } from './core.module';

describe('KiCoreModule', () => {
  it('should work', () => {
    expect(new KiCoreModule(null)).toBeDefined();
  });
});
