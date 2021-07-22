const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
        })

        const {error, value} = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'not valid email'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `not valid password <br> 1. must not be the same in db <br> 2. must be validated`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Error!'
                    })
                    break
            }
        }
        else {
            next()
        }
    }
}
