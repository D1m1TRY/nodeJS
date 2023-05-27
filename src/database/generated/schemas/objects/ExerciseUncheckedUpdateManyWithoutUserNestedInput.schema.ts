// @ts-nocheck
import Joi from 'joi';
import { ExerciseCreateWithoutUserInputSchemaObject } from './ExerciseCreateWithoutUserInput.schema';
import { ExerciseUncheckedCreateWithoutUserInputSchemaObject } from './ExerciseUncheckedCreateWithoutUserInput.schema';
import { ExerciseCreateOrConnectWithoutUserInputSchemaObject } from './ExerciseCreateOrConnectWithoutUserInput.schema';
import { ExerciseUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './ExerciseUpsertWithWhereUniqueWithoutUserInput.schema';
import { ExerciseCreateManyUserInputEnvelopeSchemaObject } from './ExerciseCreateManyUserInputEnvelope.schema';
import { ExerciseWhereUniqueInputSchemaObject } from './ExerciseWhereUniqueInput.schema';
import { ExerciseUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './ExerciseUpdateWithWhereUniqueWithoutUserInput.schema';
import { ExerciseUpdateManyWithWhereWithoutUserInputSchemaObject } from './ExerciseUpdateManyWithWhereWithoutUserInput.schema';
import { ExerciseScalarWhereInputSchemaObject } from './ExerciseScalarWhereInput.schema';

export const ExerciseUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
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
  upsert: Joi.alternatives().try(
    Joi.object().keys(ExerciseUpsertWithWhereUniqueWithoutUserInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseUpsertWithWhereUniqueWithoutUserInputSchemaObject)),
  ),
  createMany: Joi.object().keys(ExerciseCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(
    Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseWhereUniqueInputSchemaObject)),
  ),
  disconnect: Joi.alternatives().try(
    Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseWhereUniqueInputSchemaObject)),
  ),
  delete: Joi.alternatives().try(
    Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseWhereUniqueInputSchemaObject)),
  ),
  connect: Joi.alternatives().try(
    Joi.object().keys(ExerciseWhereUniqueInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseWhereUniqueInputSchemaObject)),
  ),
  update: Joi.alternatives().try(
    Joi.object().keys(ExerciseUpdateWithWhereUniqueWithoutUserInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseUpdateWithWhereUniqueWithoutUserInputSchemaObject)),
  ),
  updateMany: Joi.alternatives().try(
    Joi.object().keys(ExerciseUpdateManyWithWhereWithoutUserInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseUpdateManyWithWhereWithoutUserInputSchemaObject)),
  ),
  deleteMany: Joi.alternatives().try(
    Joi.object().keys(ExerciseScalarWhereInputSchemaObject),
    Joi.array().items(Joi.object().keys(ExerciseScalarWhereInputSchemaObject)),
  ),
};
