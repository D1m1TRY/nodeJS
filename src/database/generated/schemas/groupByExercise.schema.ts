import Joi from 'joi';
import {
  ExerciseWhereInputSchemaObject,
  ExerciseOrderByWithAggregationInputSchemaObject,
  ExerciseScalarWhereWithAggregatesInputSchemaObject,
} from './objects';
import { ExerciseScalarFieldEnumSchema } from './enums';

export const ExerciseGroupBySchema = Joi.object()
  .keys({
    where: Joi.object().keys(ExerciseWhereInputSchemaObject),
    orderBy: Joi.object().keys(ExerciseOrderByWithAggregationInputSchemaObject),
    having: Joi.object().keys(ExerciseScalarWhereWithAggregatesInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
    by: Joi.array().items(ExerciseScalarFieldEnumSchema).required(),
  })
  .required();
