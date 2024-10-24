import React from 'react';
import { FieldError } from 'react-hook-form';

interface ErrorMessageProps {
  error?: FieldError;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return error ? <p className="text-red-500 text-sm">{error.message}</p> : null;
};

export default ErrorMessage;