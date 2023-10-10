import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, FieldValues, Path, Control } from 'react-hook-form';
import { ICountry } from '../../models/country.interface';
import { ICity } from '../../models/city.interface';

type AutocompleteOption = ICountry | ICity;

interface AutocompleteFieldProps<
  O extends AutocompleteOption,
  TField extends FieldValues,
> {
  control: Control<TField>;
  name: Path<TField>;
  options: O[];
  placeholder?: string;
  disabled?: boolean;
  onValueChange?: (value: O) => void;
}

export const AutocompleteField = <
  O extends AutocompleteOption,
  TField extends FieldValues,
>(
  props: AutocompleteFieldProps<O, TField>,
) => {
  const { control, options, name, placeholder, disabled, onValueChange } =
    props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;
        return (
          <>
            <Autocomplete
              disabled={disabled}
              value={
                value
                  ? options.find((option) => {
                      return value === option.name;
                    }) ?? null
                  : null
              }
              getOptionLabel={(option) => {
                return option.name;
              }}
              onChange={(event: any, newValue) => {
                if (newValue) {
                  onChange(newValue.name);
                  onValueChange && onValueChange(newValue);
                }
              }}
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={props.placeholder}
                  inputRef={ref}
                  placeholder={placeholder}
                />
              )}
            />
            {error ? (
              <span style={{ color: 'red' }}>{error.message}</span>
            ) : null}
          </>
        );
      }}
    />
  );
};
