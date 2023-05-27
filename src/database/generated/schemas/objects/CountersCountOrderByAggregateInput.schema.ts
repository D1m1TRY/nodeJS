// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const CountersCountOrderByAggregateInputSchemaObject = {
  id: SortOrderSchema,
  counterName: SortOrderSchema,
  sequenceValue: SortOrderSchema,
};
