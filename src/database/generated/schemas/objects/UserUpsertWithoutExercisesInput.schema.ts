// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutExercisesInputSchemaObject } from './UserUpdateWithoutExercisesInput.schema';
import { UserUncheckedUpdateWithoutExercisesInputSchemaObject } from './UserUncheckedUpdateWithoutExercisesInput.schema';
import { UserCreateWithoutExercisesInputSchemaObject } from './UserCreateWithoutExercisesInput.schema';
import { UserUncheckedCreateWithoutExercisesInputSchemaObject } from './UserUncheckedCreateWithoutExercisesInput.schema';

export const UserUpsertWithoutExercisesInputSchemaObject = {
  update: Joi.alternatives().try(
    Joi.object().keys(UserUpdateWithoutExercisesInputSchemaObject),
    Joi.object().keys(UserUncheckedUpdateWithoutExercisesInputSchemaObject),
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(UserCreateWithoutExercisesInputSchemaObject),
    Joi.object().keys(UserUncheckedCreateWithoutExercisesInputSchemaObject),
  ),
};
