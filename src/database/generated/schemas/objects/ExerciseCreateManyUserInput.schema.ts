// @ts-nocheck
import Joi from 'joi';

export const ExerciseCreateManyUserInputSchemaObject = {
  oid: Joi.string(),
  id: Joi.number().required(),
  description: Joi.string().required(),
  duration: Joi.number(),
  date: Joi.date(),
};
