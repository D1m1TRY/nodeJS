// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExerciseOrderByRelationAggregateInputSchemaObject } from './ExerciseOrderByRelationAggregateInput.schema';

export const UserOrderByWithRelationInputSchemaObject = {
  oid: SortOrderSchema,
  id: SortOrderSchema,
  username: SortOrderSchema,
  exercises: Joi.object().keys(ExerciseOrderByRelationAggregateInputSchemaObject),
};
