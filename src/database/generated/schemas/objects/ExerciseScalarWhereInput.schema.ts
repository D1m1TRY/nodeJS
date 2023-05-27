// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';

export const ExerciseScalarWhereInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#ExerciseScalarWhereInput'),
    Joi.array().items(Joi.link('#ExerciseScalarWhereInput')),
  ),
  OR: Joi.array().items(Joi.link('#ExerciseScalarWhereInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#ExerciseScalarWhereInput'),
    Joi.array().items(Joi.link('#ExerciseScalarWhereInput')),
  ),
  oid: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject), Joi.string()),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject), Joi.number()),
  description: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject), Joi.string()),
  duration: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject), Joi.number()),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject), Joi.number()),
};
