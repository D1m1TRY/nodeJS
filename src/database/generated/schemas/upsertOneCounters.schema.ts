import Joi from 'joi';
import {
  CountersWhereUniqueInputSchemaObject,
  CountersCreateInputSchemaObject,
  CountersUpdateInputSchemaObject,
} from './objects';

export const CountersUpsertSchema = Joi.object()
  .keys({
    where: Joi.object().keys(CountersWhereUniqueInputSchemaObject),
    data: Joi.object().keys(CountersCreateInputSchemaObject),
    update: Joi.object().keys(CountersUpdateInputSchemaObject),
  })
  .required();
