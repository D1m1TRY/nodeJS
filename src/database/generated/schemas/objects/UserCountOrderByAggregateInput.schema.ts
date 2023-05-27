// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserCountOrderByAggregateInputSchemaObject = {
  oid: SortOrderSchema,
  id: SortOrderSchema,
  username: SortOrderSchema,
};
