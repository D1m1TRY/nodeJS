// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';

export const CountersScalarWhereWithAggregatesInputSchemaObject = {
  AND: Joi.alternatives().try(
    Joi.link('#CountersScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#CountersScalarWhereWithAggregatesInput')),
  ),
  OR: Joi.array().items(Joi.link('#CountersScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(
    Joi.link('#CountersScalarWhereWithAggregatesInput'),
    Joi.array().items(Joi.link('#CountersScalarWhereWithAggregatesInput')),
  ),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject), Joi.string()),
  counterName: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject), Joi.string()),
  sequenceValue: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject), Joi.number()),
};
