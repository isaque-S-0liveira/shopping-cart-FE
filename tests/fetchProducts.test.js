require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('testa se fetchProducts é uma função', () => {
   expect(typeof fetchProducts).toBe('function');
  });
  test('testa se a função fetch é chamada ', async () => {
   await fetchProducts('computador');
   expect(fetch).toHaveBeenCalled();
  });
  test("Teste se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint", async () => {
    await fetchProducts('computador');
   expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  test("Teste se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch", async () => {
   const computadorS = await fetchProducts('computador');
    expect(computadorS).toEqual(computadorSearch);
  });
  test("Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
