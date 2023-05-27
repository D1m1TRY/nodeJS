import Joi from 'joi';
import { ExerciseWhereUniqueInputSchemaObject } from './objects';

export const ExerciseDeleteOneSchema = Joi.object()
  .keys({ where: Joi.object().keys(ExerciseWhereUniqueInputSchemaObject) })
  .required();
