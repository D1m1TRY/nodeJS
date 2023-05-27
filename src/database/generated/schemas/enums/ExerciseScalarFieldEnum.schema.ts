import Joi from 'joi';

export const ExerciseScalarFieldEnumSchema = Joi.string().valid(
  ...['oid', 'id', 'description', 'duration', 'date', 'userId'],
);
