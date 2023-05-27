// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const ExerciseMinOrderByAggregateInputSchemaObject = {
  oid: SortOrderSchema,
  id: SortOrderSchema,
  description: SortOrderSchema,
  duration: SortOrderSchema,
  date: SortOrderSchema,
  userId: SortOrderSchema,
};
