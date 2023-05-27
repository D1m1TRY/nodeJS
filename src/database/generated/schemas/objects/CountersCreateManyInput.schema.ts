// @ts-nocheck
import Joi from 'joi';

export const CountersCreateManyInputSchemaObject = {
  id: Joi.string(),
  counterName: Joi.string().required(),
  sequenceValue: Joi.number(),
};
