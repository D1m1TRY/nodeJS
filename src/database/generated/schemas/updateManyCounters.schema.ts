import Joi from 'joi';
import { CountersUpdateManyMutationInputSchemaObject, CountersWhereInputSchemaObject } from './objects';

export const CountersUpdateManySchema = Joi.object()
  .keys({
    data: Joi.object().keys(CountersUpdateManyMutationInputSchemaObject),
    where: Joi.object().keys(CountersWhereInputSchemaObject),
  })
  .required();
