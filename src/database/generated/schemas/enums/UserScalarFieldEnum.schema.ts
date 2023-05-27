import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...['oid', 'id', 'username']);
