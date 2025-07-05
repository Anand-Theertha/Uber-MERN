const { validationResult } = require("express-validator");

function checkErrors(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return null;
}

module.exports = checkErrors;
