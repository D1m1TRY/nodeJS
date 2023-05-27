// @ts-nocheck
import Joi from 'joi';
import { ExerciseCreateManyUserInputSchemaObject } from './ExerciseCreateManyUserInput.schema';

export const ExerciseCreateManyUserInputEnvelopeSchemaObject = {
  data: Joi.alternatives().try(
    Joi.object().keys(ExerciseCreateManyUserInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseCreateManyUserInputSchemaObject)),
  ),
};
