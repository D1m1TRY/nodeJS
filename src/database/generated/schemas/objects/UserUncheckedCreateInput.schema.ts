// @ts-nocheck
import Joi from 'joi';
import { ExerciseUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './ExerciseUncheckedCreateNestedManyWithoutUserInput.schema';

export const UserUncheckedCreateInputSchemaObject = {
  oid: Joi.string(),
  id: Joi.number().required(),
  username: Joi.string().required(),
  exercises: Joi.object().keys(ExerciseUncheckedCreateNestedManyWithoutUserInputSchemaObject),
};
