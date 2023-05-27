import Joi from 'joi';
import { ExerciseWhereInputSchemaObject } from './objects';

export const ExerciseDeleteManySchema = Joi.object()
  .keys({ where: Joi.object().keys(ExerciseWhereInputSchemaObject) })
  .required();
