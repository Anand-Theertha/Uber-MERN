const checkIfAlreadyExists = async (model, email) => {
  const ifAlreadyExists = await model.findOne({ email });
  return !!ifAlreadyExists;
};

module.exports = checkIfAlreadyExists;
