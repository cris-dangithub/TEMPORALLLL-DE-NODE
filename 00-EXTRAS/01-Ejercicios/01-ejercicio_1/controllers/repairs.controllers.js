const Repairs = require('../models/repairs.model');
const Users = require('../models/users.model');

exports.getAllMotorcyclePendingList = async (req, res) => {
  const repairs = await Repairs.findAll({
    where: {
      status: 'pending',
    },
  });
  res.status(200).json({
    status: 'success',
    message: 'ROUTER - GET',
    repairs,
  });
};

exports.getPendingMotorcycletById = (req, res) => {
  const { id } = req.params;
  res.json({
    status: 'success',
    message: 'ROUTER - GET BY ID',
  });
};

exports.createAppointment = async (req, res) => {
  const { date, userId } = req.body;
  const user = await Users.findOne({
    where: {
      id: userId,
      status: 'available',
    },
  });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User has not been found',
    });
  }
  const newRepair = await Repairs.create({
    date,
    userId,
  });
  res.status(201).json({
    status: 'success',
    message: `The appointment has been created successfully by ${user.name}`,
    newRepair,
  });
};

exports.updateStatusRepair = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTER - UPDATE',
  });
};

exports.cancelRepair = (req, res) => {
  res.json({
    status: 'success',
    message: 'ROUTE - DELETE',
  });
};
