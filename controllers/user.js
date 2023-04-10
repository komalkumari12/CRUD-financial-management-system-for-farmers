const Details = require('../models/farmer');

exports.addDetails = async (req, res) => {
  try {
    const cred = await Details.create(req.body);
    return res.status(200).json(cred);
  } catch (error) {
    console.log(error.message);
    //http status signal 404 - resource does not exist
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.getDetails = async (req, res) => {
  try {
    const cred = await Details.find({});
    return res.status(200).json({
      message: cred,
    });
  } catch (error) {
    console.log(error.message);
    //http status signal 404 - resource does not exist
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.getDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const farmerDetail = await Details.findById(id);
    return res.status(200).json({
      data: farmerDetail,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.deleteDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const farmerDetail = await Details.findByIdAndDelete(id);

    return res.status(200).json({
      message: 'Details deleted',
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

exports.updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const cred = await Details.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json({
      message: cred,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
