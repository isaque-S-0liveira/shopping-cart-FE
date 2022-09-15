const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', async () => {
  saveCartItems('item')
  expect(localStorage.setItem).toHaveBeenCalled();
  })
  test('Teste se, ao executar saveCartItemscom um cartItemargumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
   saveCartItems('item');
   expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'item');
  })
});
