// @ts-nocheck
import Joi from 'joi';
import { ExerciseScalarWhereInputSchemaObject } from './ExerciseScalarWhereInput.schema';
import { ExerciseUpdateManyMutationInputSchemaObject } from './ExerciseUpdateManyMutationInput.schema';
import { ExerciseUncheckedUpdateManyWithoutExercisesInputSchemaObject } from './ExerciseUncheckedUpdateManyWithoutExercisesInput.schema';

export const ExerciseUpdateManyWithWhereWithoutUserInputSchemaObject = {
  where: Joi.object().keys(ExerciseScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(
    Joi.object().keys(ExerciseUpdateManyMutationInputSchemaObject),
    Joi.object().keys(ExerciseUncheckedUpdateManyWithoutExercisesInputSchemaObject),
  ),
};
