import Joi from 'joi';
import {
  ExerciseWhereUniqueInputSchemaObject,
  ExerciseCreateInputSchemaObject,
  ExerciseUpdateInputSchemaObject,
} from './objects';

export const ExerciseUpsertSchema = Joi.object()
  .keys({
    where: Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
    data: Joi.object().keys(ExerciseCreateInputSchemaObject),
    update: Joi.object().keys(ExerciseUpdateInputSchemaObject),
  })
  .required();
