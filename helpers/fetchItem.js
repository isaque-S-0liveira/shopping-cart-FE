const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;
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
    fetchItem,
  };
}
