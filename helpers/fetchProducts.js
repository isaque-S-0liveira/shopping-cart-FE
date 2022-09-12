const fetchProducts = async (product) => {
  const url = (`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  try {  
    const respost = await fetch(url);
    const json = await respost.json();
    return json;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
