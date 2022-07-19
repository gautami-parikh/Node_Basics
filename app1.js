const Joi = require('joi');
const { join } = require('lodash');

const arrayString = ['banana','bacon','cheese'];
const arrayObjects = [{example:'example1'},{example:'example2'}];

const userInput = {personalInfo: {
                        streetAddress : '123435456',
                        city :'Vadodara',
                        state : 'flwew'
},
                    prefernces: arrayString};

//personal info schema
const personalInfoSchema = Joi.object().keys({
        streetAddress : Joi.string().trim().required(),
        city :Joi.string().trim().required(),
        state : Joi.string().trim().length(2).required()
});

const preferncesSchema = Joi.array().items();

const schema = Joi.object().keys({
    personalInfo : personalInfoSchema,
    preferences : preferncesSchema
});

const validation = schema.validate(userInput);
console.log(validation);