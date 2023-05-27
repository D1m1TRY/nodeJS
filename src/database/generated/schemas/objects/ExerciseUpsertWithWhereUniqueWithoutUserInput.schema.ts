// @ts-nocheck
import Joi from 'joi';
import { ExerciseWhereUniqueInputSchemaObject } from './ExerciseWhereUniqueInput.schema';
import { ExerciseUpdateWithoutUserInputSchemaObject } from './ExerciseUpdateWithoutUserInput.schema';
import { ExerciseUncheckedUpdateWithoutUserInputSchemaObject } from './ExerciseUncheckedUpdateWithoutUserInput.schema';
import { ExerciseCreateWithoutUserInputSchemaObject } from './ExerciseCreateWithoutUserInput.schema';
import { ExerciseUncheckedCreateWithoutUserInputSchemaObject } from './ExerciseUncheckedCreateWithoutUserInput.schema';

export const ExerciseUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
  where: Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(
    Joi.object().keys(ExerciseUpdateWithoutUserInputSchemaObject),
    Joi.object().keys(ExerciseUncheckedUpdateWithoutUserInputSchemaObject),
  ),
  create: Joi.alternatives().try(
    Joi.object().keys(ExerciseCreateWithoutUserInputSchemaObject),
    Joi.object().keys(ExerciseUncheckedCreateWithoutUserInputSchemaObject),
  ),
};
