// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutExercisesInputSchemaObject } from './UserCreateWithoutExercisesInput.schema';
import { UserUncheckedCreateWithoutExercisesInputSchemaObject } from './UserUncheckedCreateWithoutExercisesInput.schema';

export const UserCreateOrConnectWithoutExercisesInputSchemaObject = {
  where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(UserCreateWithoutExercisesInputSchemaObject),
    Joi.object().keys(UserUncheckedCreateWithoutExercisesInputSchemaObject),
  ),
};
