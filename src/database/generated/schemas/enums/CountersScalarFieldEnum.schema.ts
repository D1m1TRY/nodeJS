import Joi from 'joi';

export const CountersScalarFieldEnumSchema = Joi.string().valid(...['id', 'counterName', 'sequenceValue']);
