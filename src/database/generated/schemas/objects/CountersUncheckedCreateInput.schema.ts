// @ts-nocheck
import Joi from 'joi';

export const CountersUncheckedCreateInputSchemaObject = {
  id: Joi.string(),
  counterName: Joi.string().required(),
  sequenceValue: Joi.number(),
};
