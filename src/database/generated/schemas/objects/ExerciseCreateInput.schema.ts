// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutExercisesInputSchemaObject } from './UserCreateNestedOneWithoutExercisesInput.schema';

export const ExerciseCreateInputSchemaObject = {
  oid: Joi.string(),
  id: Joi.number().required(),
  description: Joi.string().required(),
  duration: Joi.number(),
  date: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutExercisesInputSchemaObject),
};
