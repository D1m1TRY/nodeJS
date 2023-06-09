// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';

export const CountersUpdateInputSchemaObject = {
  counterName: Joi.alternatives().try(Joi.string(), Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  sequenceValue: Joi.alternatives().try(Joi.number(), Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
};
