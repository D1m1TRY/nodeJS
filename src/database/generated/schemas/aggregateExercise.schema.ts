import Joi from 'joi';
import {
  ExerciseWhereInputSchemaObject,
  ExerciseOrderByWithRelationInputSchemaObject,
  ExerciseWhereUniqueInputSchemaObject,
} from './objects';

export const ExerciseAggregateSchema = Joi.object()
  .keys({
    where: Joi.object().keys(ExerciseWhereInputSchemaObject),
    orderBy: Joi.object().keys(ExerciseOrderByWithRelationInputSchemaObject),
    cursor: Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
    take: Joi.number(),
    skip: Joi.number(),
  })
  .required();
