const Joi = require('joi')


const registerValidation = data => {

    const schema = Joi.object({
        FirstName : Joi.string().min(3).required(),
        LastName : Joi.string().min(2).required(),
        PhoneNumber: Joi.string().min(11).required(),
        Address: Joi.string().min(20).required(),
        Date: Joi.string().required(),
        Email: Joi.string().min(11).required()
       
       })

       return schema.validate(data)
}

module.exports.registerValidation = registerValidation