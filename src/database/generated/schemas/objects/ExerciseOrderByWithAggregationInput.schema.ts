// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExerciseCountOrderByAggregateInputSchemaObject } from './ExerciseCountOrderByAggregateInput.schema';
import { ExerciseAvgOrderByAggregateInputSchemaObject } from './ExerciseAvgOrderByAggregateInput.schema';
import { ExerciseMaxOrderByAggregateInputSchemaObject } from './ExerciseMaxOrderByAggregateInput.schema';
import { ExerciseMinOrderByAggregateInputSchemaObject } from './ExerciseMinOrderByAggregateInput.schema';
import { ExerciseSumOrderByAggregateInputSchemaObject } from './ExerciseSumOrderByAggregateInput.schema';

export const ExerciseOrderByWithAggregationInputSchemaObject = {
  oid: SortOrderSchema,
  id: SortOrderSchema,
  description: SortOrderSchema,
  duration: SortOrderSchema,
  date: SortOrderSchema,
  userId: SortOrderSchema,
  _count: Joi.object().keys(ExerciseCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(ExerciseAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(ExerciseMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(ExerciseMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(ExerciseSumOrderByAggregateInputSchemaObject),
};
