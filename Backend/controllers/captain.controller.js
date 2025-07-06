const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const checkErrors = require("../utils/checkErrors");
const checkIfAlreadyExists = require("../utils/checkIfAlreadyExists");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  checkErrors(req, res);

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadyExists = await checkIfAlreadyExists(
    captainModel,
    email
  );
  if (isCaptainAlreadyExists) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  await captain.save();

  const token = captain.generateAuthToken();

  res.status(201).json({
    message: "Captain registered successfully",
    token,
    captain,
  });
};

module.exports.loginCaptain = async (req, res, next) => {
  checkErrors(req, res);

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordValid =
    await captainModel.schema.methods.comparePassword.call(captain, password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = captain.generateAuthToken();

  res.cookie("token", token);
  res.status(200).json({
    message: "Captain logged in successfully",
    token,
    captain,
  });
};

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({
    message: "Captain profile retrieved successfully",
    captain: req.captain,
  });
};

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blacklistTokenModel.create({ token });

  res.clearCookie("token");
  res.status(200).json({ message: "Captain logged out successfully" });
};
