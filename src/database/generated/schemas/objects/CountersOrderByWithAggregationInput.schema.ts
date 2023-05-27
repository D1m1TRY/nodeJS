// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CountersCountOrderByAggregateInputSchemaObject } from './CountersCountOrderByAggregateInput.schema';
import { CountersAvgOrderByAggregateInputSchemaObject } from './CountersAvgOrderByAggregateInput.schema';
import { CountersMaxOrderByAggregateInputSchemaObject } from './CountersMaxOrderByAggregateInput.schema';
import { CountersMinOrderByAggregateInputSchemaObject } from './CountersMinOrderByAggregateInput.schema';
import { CountersSumOrderByAggregateInputSchemaObject } from './CountersSumOrderByAggregateInput.schema';

export const CountersOrderByWithAggregationInputSchemaObject = {
  id: SortOrderSchema,
  counterName: SortOrderSchema,
  sequenceValue: SortOrderSchema,
  _count: Joi.object().keys(CountersCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(CountersAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(CountersMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(CountersMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(CountersSumOrderByAggregateInputSchemaObject),
};
