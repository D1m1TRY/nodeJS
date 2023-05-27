import Joi from 'joi';
import { CountersWhereInputSchemaObject } from './objects';

export const CountersDeleteManySchema = Joi.object()
  .keys({ where: Joi.object().keys(CountersWhereInputSchemaObject) })
  .required();
