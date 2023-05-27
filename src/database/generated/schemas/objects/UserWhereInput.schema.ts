// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { ExerciseListRelationFilterSchemaObject } from './ExerciseListRelationFilter.schema';

export const UserWhereInputSchemaObject = {
  AND: Joi.alternatives().try(Joi.link('#UserWhereInput'), Joi.array().items(Joi.link('#UserWhereInput'))),
  OR: Joi.array().items(Joi.link('#UserWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserWhereInput'), Joi.array().items(Joi.link('#UserWhereInput'))),
  oid: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject), Joi.string()),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject), Joi.number()),
  username: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject), Joi.string()),
  exercises: Joi.object().keys(ExerciseListRelationFilterSchemaObject),
};
