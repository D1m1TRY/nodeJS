// @ts-nocheck
import Joi from 'joi';

export const CountersCreateInputSchemaObject = {
  id: Joi.string(),
  counterName: Joi.string().required(),
  sequenceValue: Joi.number(),
};
