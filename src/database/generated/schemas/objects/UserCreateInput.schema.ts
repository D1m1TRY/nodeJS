// @ts-nocheck
import Joi from 'joi';
import { ExerciseCreateNestedManyWithoutUserInputSchemaObject } from './ExerciseCreateNestedManyWithoutUserInput.schema';

export const UserCreateInputSchemaObject = {
  oid: Joi.string(),
  id: Joi.number().required(),
  username: Joi.string().required(),
  exercises: Joi.object().keys(ExerciseCreateNestedManyWithoutUserInputSchemaObject),
};
