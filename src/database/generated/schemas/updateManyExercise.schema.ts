import Joi from 'joi';
import { ExerciseUpdateManyMutationInputSchemaObject, ExerciseWhereInputSchemaObject } from './objects';

export const ExerciseUpdateManySchema = Joi.object()
  .keys({
    data: Joi.object().keys(ExerciseUpdateManyMutationInputSchemaObject),
    where: Joi.object().keys(ExerciseWhereInputSchemaObject),
  })
  .required();
