// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';

export const CountersWhereInputSchemaObject = {
  AND: Joi.alternatives().try(Joi.link('#CountersWhereInput'), Joi.array().items(Joi.link('#CountersWhereInput'))),
  OR: Joi.array().items(Joi.link('#CountersWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#CountersWhereInput'), Joi.array().items(Joi.link('#CountersWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject), Joi.string()),
  counterName: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject), Joi.string()),
  sequenceValue: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject), Joi.number()),
};
