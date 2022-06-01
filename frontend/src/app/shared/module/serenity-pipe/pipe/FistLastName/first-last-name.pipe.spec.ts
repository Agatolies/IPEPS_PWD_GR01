import { FirstLastNamePipe } from '@shared/module/serenity-pipe/pipe';

describe('FirstLastNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLastNamePipe();
    expect(pipe).toBeTruthy();
  });
});
