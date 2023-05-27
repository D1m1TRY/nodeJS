// @ts-nocheck
import Joi from 'joi';

export const UserCreateManyInputSchemaObject = {
  oid: Joi.string(),
  id: Joi.number().required(),
  username: Joi.string().required(),
};
