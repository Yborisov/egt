import React, { ChangeEvent, FC } from 'react';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldError,
  get,
} from 'react-hook-form';

import TextField from '@mui/material/TextField';

export interface IFormField {
  control: Control<any, any>;
  name: string;
  label?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const FormField: FC<IFormField> = ({ control, name, label, onChange }) => {
  const onValueChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: ControllerRenderProps<any, string>,
  ) => {
    if (onChange) {
      onChange(event);
    } else {
      field.onChange(event.target.value);
    }
  };

  return (
    <Controller
      key={name}
      name={name}
      control={control}
      render={({ field: { ref, ...restFields }, formState: { errors } }) => {
        const mappedError: FieldError = get(errors, name);
        return (
          <TextField
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            label={label || null}
            placeholder={label || ''}
            fullWidth
            error={Boolean(errors && mappedError)}
            helperText={mappedError && mappedError?.message}
            {...restFields}
            inputRef={ref}
            value={restFields.value ?? ''}
            onChange={(event) => onValueChange(event, { ref, ...restFields })}
          />
        );
      }}
    />
  );
};

export default FormField;
