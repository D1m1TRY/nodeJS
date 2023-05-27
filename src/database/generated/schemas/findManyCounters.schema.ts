import Joi from 'joi';
import {
  CountersWhereInputSchemaObject,
  CountersOrderByWithRelationInputSchemaObject,
  CountersWhereUniqueInputSchemaObject,
} from './objects';
import { CountersScalarFieldEnumSchema } from './enums';

export const CountersFindManySchema = Joi.object()
  .keys({
    where: Joi.object().keys(CountersWhereInputSchemaObject),
    orderBy: Joi.object().keys(CountersOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(CountersWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    distinct: Joi.array().items(CountersScalarFieldEnumSchema),
  })
  .required();
