require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Testa se fetchItem é uma função;', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Testa se a função fech é chamada com o argumento "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  });
  test('Testa se o retorno da função fetchItemcom o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const obj = await fetchItem('MLB1615760527');
    expect(obj).toEqual(item);
   });
   test('Teste se, ao chamar a função fetchItemsem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
   })
});
