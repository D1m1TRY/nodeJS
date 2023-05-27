// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { ExerciseUpdateManyWithoutUserNestedInputSchemaObject } from './ExerciseUpdateManyWithoutUserNestedInput.schema';

export const UserUpdateInputSchemaObject = {
  id: Joi.alternatives().try(Joi.number(), Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  username: Joi.alternatives().try(Joi.string(), Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  exercises: Joi.object().keys(ExerciseUpdateManyWithoutUserNestedInputSchemaObject),
};
