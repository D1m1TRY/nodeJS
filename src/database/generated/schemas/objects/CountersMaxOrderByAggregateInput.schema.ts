// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const CountersMaxOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  counterName: SortOrderSchema,
  sequenceValue: SortOrderSchema,
};
