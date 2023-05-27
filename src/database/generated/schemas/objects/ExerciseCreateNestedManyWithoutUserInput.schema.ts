// @ts-nocheck
import Joi from 'joi';
import { ExerciseCreateWithoutUserInputSchemaObject } from './ExerciseCreateWithoutUserInput.schema';
import { ExerciseUncheckedCreateWithoutUserInputSchemaObject } from './ExerciseUncheckedCreateWithoutUserInput.schema';
import { ExerciseCreateOrConnectWithoutUserInputSchemaObject } from './ExerciseCreateOrConnectWithoutUserInput.schema';
import { ExerciseCreateManyUserInputEnvelopeSchemaObject } from './ExerciseCreateManyUserInputEnvelope.schema';
import { ExerciseWhereUniqueInputSchemaObject } from './ExerciseWhereUniqueInput.schema';

export const ExerciseCreateNestedManyWithoutUserInputSchemaObject = {
  create: Joi.alternatives().try(
    Joi.object().keys(ExerciseCreateWithoutUserInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseCreateWithoutUserInputSchemaObject)),
    Joi.object().keys(ExerciseUncheckedCreateWithoutUserInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseUncheckedCreateWithoutUserInputSchemaObject)),
  ),
  connectOrCreate: Joi.alternatives().try(
    Joi.object().keys(ExerciseCreateOrConnectWithoutUserInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseCreateOrConnectWithoutUserInputSchemaObject)),
  ),
  createMany: Joi.object().keys(ExerciseCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(
    Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseWhereUniqueInputSchemaObject)),
  ),
};
