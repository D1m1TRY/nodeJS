import Joi from 'joi';
import { ExerciseCreateInputSchemaObject } from './objects';

export const ExerciseCreateSchema = Joi.object()
  .keys({ data: Joi.object().keys(ExerciseCreateInputSchemaObject) })
  .required();
