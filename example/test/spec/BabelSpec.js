describe('Babel', () => {

  let babel = new Babel();

  it('Should say world', () => {
    expect(babel.hello()).toEqual('world');
  });

  it('Should say hello', () => {
    expect(babel.world()).toEqual('hello');
  });

});