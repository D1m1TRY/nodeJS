// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutExercisesInputSchemaObject } from './UserCreateWithoutExercisesInput.schema';
import { UserUncheckedCreateWithoutExercisesInputSchemaObject } from './UserUncheckedCreateWithoutExercisesInput.schema';
import { UserCreateOrConnectWithoutExercisesInputSchemaObject } from './UserCreateOrConnectWithoutExercisesInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';

export const UserCreateNestedOneWithoutExercisesInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(UserCreateWithoutExercisesInputSchemaObject),
    Joi.object().keys(UserUncheckedCreateWithoutExercisesInputSchemaObject),
  ),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutExercisesInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
};
