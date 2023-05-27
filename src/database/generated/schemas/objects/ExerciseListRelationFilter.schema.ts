// @ts-nocheck
import Joi from 'joi';
import { ExerciseWhereInputSchemaObject } from './ExerciseWhereInput.schema';

export const ExerciseListRelationFilterSchemaObject = {
  every: Joi.object().keys(ExerciseWhereInputSchemaObject),
  some: Joi.object().keys(ExerciseWhereInputSchemaObject),
  none: Joi.object().keys(ExerciseWhereInputSchemaObject),
};
