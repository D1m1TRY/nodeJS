import Joi from 'joi';
import { ExerciseUpdateInputSchemaObject, ExerciseWhereUniqueInputSchemaObject } from './objects';

export const ExerciseUpdateOneSchema = Joi.object()
  .keys({
    data: Joi.object().keys(ExerciseUpdateInputSchemaObject),
    where: Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
  })
  .required();
