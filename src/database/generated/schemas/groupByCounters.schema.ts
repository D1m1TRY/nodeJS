import Joi from 'joi';
import {
  CountersWhereInputSchemaObject,
  CountersOrderByWithAggregationInputSchemaObject,
  CountersScalarWhereWithAggregatesInputSchemaObject,
} from './objects';
import { CountersScalarFieldEnumSchema } from './enums';

export const CountersGroupBySchema = Joi.object()
  .keys({
    where: Joi.object().keys(CountersWhereInputSchemaObject),
    orderBy: Joi.object().keys(CountersOrderByWithAggregationInputSchemaObject),
    having: Joi.object().keys(CountersScalarWhereWithAggregatesInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    by: Joi.array().items(CountersScalarFieldEnumSchema).required(),
  })
  .required();
