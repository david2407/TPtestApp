import validator from "validator";

class ValidateFields {
  validateEmail(email) {
    return validator.isEmpty(email)
      ? "Email is required"
      : !validator.isEmail(email)
      ? "Invalid Email"
      : false;
  }

  validateName(name) {
    return validator.isEmpty(name) ? "Name is required" : false;
  }
}

const validateFields = new ValidateFields();

export { validateFields };
