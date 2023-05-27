import Joi from 'joi';
import { CountersUpdateInputSchemaObject, CountersWhereUniqueInputSchemaObject } from './objects';

export const CountersUpdateOneSchema = Joi.object()
  .keys({
    data: Joi.object().keys(CountersUpdateInputSchemaObject),
    where: Joi.object().keys(CountersWhereUniqueInputSchemaObject),
  })
  .required();
