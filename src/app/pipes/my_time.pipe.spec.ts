import { MyTimePipe } from './my_time.pipe';

describe('MyTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MyTimePipe();
    expect(pipe).toBeTruthy();
  });
});
