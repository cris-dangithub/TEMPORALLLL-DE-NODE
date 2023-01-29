exports.createUserAccount = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - POST',
  });
};

exports.loginUser = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE- POST',
  });
};

exports.getAllUserTransfers = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - GET',
  });
};
