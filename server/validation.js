import Joi from 'joi'

// validation for registering new users
export const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(6).email(), // make sure email entered is an actual email address
    userType: Joi.string(),
    password: Joi.string().min(10).required()
  })
  return schema.validate(data)
}

export const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email(), // make sure email entered is an actual email address
    password: Joi.string().min(10).required()
  })
  return schema.validate(data)
}
