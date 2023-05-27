// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutExercisesInputSchemaObject } from './UserCreateWithoutExercisesInput.schema';
import { UserUncheckedCreateWithoutExercisesInputSchemaObject } from './UserUncheckedCreateWithoutExercisesInput.schema';
import { UserCreateOrConnectWithoutExercisesInputSchemaObject } from './UserCreateOrConnectWithoutExercisesInput.schema';
import { UserUpsertWithoutExercisesInputSchemaObject } from './UserUpsertWithoutExercisesInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutExercisesInputSchemaObject } from './UserUpdateWithoutExercisesInput.schema';
import { UserUncheckedUpdateWithoutExercisesInputSchemaObject } from './UserUncheckedUpdateWithoutExercisesInput.schema';

export const UserUpdateOneRequiredWithoutExercisesNestedInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(UserCreateWithoutExercisesInputSchemaObject),
    Joi.object().keys(UserUncheckedCreateWithoutExercisesInputSchemaObject),
  ),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutExercisesInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutExercisesInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(
    Joi.object().keys(UserUpdateWithoutExercisesInputSchemaObject),
    Joi.object().keys(UserUncheckedUpdateWithoutExercisesInputSchemaObject),
  ),
};
