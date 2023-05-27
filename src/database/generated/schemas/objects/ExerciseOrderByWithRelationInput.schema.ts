// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema';

export const ExerciseOrderByWithRelationInputSchemaObject = {
  oid: SortOrderSchema,
  id: SortOrderSchema,
  description: SortOrderSchema,
  duration: SortOrderSchema,
  date: SortOrderSchema,
  userId: SortOrderSchema,
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
};
