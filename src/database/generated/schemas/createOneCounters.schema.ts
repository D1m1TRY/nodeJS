import Joi from 'joi';
import { CountersCreateInputSchemaObject } from './objects';

export const CountersCreateSchema = Joi.object()
  .keys({ data: Joi.object().keys(CountersCreateInputSchemaObject) })
  .required();
