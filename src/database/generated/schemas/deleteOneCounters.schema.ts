import Joi from 'joi';
import { CountersWhereUniqueInputSchemaObject } from './objects';

export const CountersDeleteOneSchema = Joi.object()
  .keys({ where: Joi.object().keys(CountersWhereUniqueInputSchemaObject) })
  .required();
