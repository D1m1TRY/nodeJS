// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';

export const UserUncheckedUpdateWithoutExercisesInputSchemaObject = {
  id: Joi.alternatives().try(Joi.number(), Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  username: Joi.alternatives().try(Joi.string(), Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
};
