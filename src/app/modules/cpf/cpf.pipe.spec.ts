import { Cpf } from './cpf.pipe';

describe('CpfPipe', () => {
  it('create an instance', () => {
    const pipe = new Cpf();
    expect(pipe).toBeTruthy();
  });
});
