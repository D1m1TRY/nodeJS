import Joi from 'joi';
import { ExerciseWhereUniqueInputSchemaObject } from './objects';

export const ExerciseFindUniqueSchema = Joi.object()
  .keys({ where: Joi.object().keys(ExerciseWhereUniqueInputSchemaObject) })
  .required();
