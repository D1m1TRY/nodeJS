// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const CountersMinOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  counterName: SortOrderSchema,
  sequenceValue: SortOrderSchema,
};
