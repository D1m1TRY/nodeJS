// @ts-nocheck
import Joi from 'joi';
import { ExerciseWhereUniqueInputSchemaObject } from './ExerciseWhereUniqueInput.schema';
import { ExerciseUpdateWithoutUserInputSchemaObject } from './ExerciseUpdateWithoutUserInput.schema';
import { ExerciseUncheckedUpdateWithoutUserInputSchemaObject } from './ExerciseUncheckedUpdateWithoutUserInput.schema';

export const ExerciseUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
  where: Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(
    Joi.object().keys(ExerciseUpdateWithoutUserInputSchemaObject),
    Joi.object().keys(ExerciseUncheckedUpdateWithoutUserInputSchemaObject),
  ),
};
