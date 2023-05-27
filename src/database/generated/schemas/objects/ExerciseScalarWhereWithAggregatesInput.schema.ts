// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema';

export const ExerciseScalarWhereWithAggregatesInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#ExerciseScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#ExerciseScalarWhereWithAggregatesInput')),
  ),
  OR: Joi.array().items(Joi.link('#ExerciseScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#ExerciseScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#ExerciseScalarWhereWithAggregatesInput')),
  ),
  oid: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject), Joi.string()),
  id: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject), Joi.number()),
  description: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject), Joi.string()),
  duration: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject), Joi.number()),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject), Joi.number()),
};
