// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';

export const ExerciseWhereInputSchemaObject = {
  AND: Joi.alternatives().try(Joi.link('#ExerciseWhereInput'), Joi.array().items(Joi.link('#ExerciseWhereInput'))),
  OR: Joi.array().items(Joi.link('#ExerciseWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#ExerciseWhereInput'), Joi.array().items(Joi.link('#ExerciseWhereInput'))),
  oid: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject), Joi.string()),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject), Joi.number()),
  description: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject), Joi.string()),
  duration: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject), Joi.number()),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject), Joi.number()),
  user: Joi.alternatives().try(
    Joi.object().keys(UserRelationFilterSchemaObject),
    Joi.object().keys(UserWhereInputSchemaObject),
  ),
};
