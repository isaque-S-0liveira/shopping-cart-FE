const fetchProducts = async (produto) => {
  const url = (`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
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
