// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const ExerciseSumOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  duration: SortOrderSchema,
  userId: SortOrderSchema,
};
