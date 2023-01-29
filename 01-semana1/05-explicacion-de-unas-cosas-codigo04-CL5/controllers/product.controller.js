exports.findProduct = (req, res) => {
  const { param1, param2 } = req.params; //!ESTO BORRAR PARA EL SIGUIENTE ARCHIVO
  console.log(req.query); //!ESTO BORRAR PARA EL SIGUIENTE ARCHIVO
  res.json({
    status: 'success',
    message: 'ROUTE - GET',
    param1, //!ESTO BORRAR PARA EL SIGUIENTE ARCHIVO
    param2, //!ESTO BORRAR PARA EL SIGUIENTE ARCHIVO
  });
};

exports.createProduct = (req, res) => {
  const { name, price, stock } = req.body;
  res.json({
    status: 'success',
    message: 'ROUTE - POST',
    products: {
      name,
      price,
      stock,
    },
  });
};

exports.updateProduct = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - PATCH',
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  res.json({
    status: 'success',
    message: 'ROUTE - DELETE',
    id,
  });
};
