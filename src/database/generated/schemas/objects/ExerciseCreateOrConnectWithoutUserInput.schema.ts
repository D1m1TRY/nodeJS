// @ts-nocheck
import Joi from 'joi';
import { ExerciseWhereUniqueInputSchemaObject } from './ExerciseWhereUniqueInput.schema';
import { ExerciseCreateWithoutUserInputSchemaObject } from './ExerciseCreateWithoutUserInput.schema';
import { ExerciseUncheckedCreateWithoutUserInputSchemaObject } from './ExerciseUncheckedCreateWithoutUserInput.schema';

export const ExerciseCreateOrConnectWithoutUserInputSchemaObject = {
  where: Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(
    Joi.object().keys(ExerciseCreateWithoutUserInputSchemaObject),
    Joi.object().keys(ExerciseUncheckedCreateWithoutUserInputSchemaObject),
  ),
};
