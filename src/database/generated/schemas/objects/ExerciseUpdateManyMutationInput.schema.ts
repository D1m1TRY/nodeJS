// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';

export const ExerciseUpdateManyMutationInputSchemaObject = {
  id: Joi.alternatives().try(Joi.number(), Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  description: Joi.alternatives().try(Joi.string(), Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  duration: Joi.alternatives().try(Joi.number(), Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  date: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
};
