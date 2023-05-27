import Joi from 'joi';
import { CountersWhereUniqueInputSchemaObject } from './objects';

export const CountersFindUniqueSchema = Joi.object()
  .keys({ where: Joi.object().keys(CountersWhereUniqueInputSchemaObject) })
  .required();
