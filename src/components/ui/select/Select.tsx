import React, { FC, useId } from 'react';

import Select from 'react-select';

import { Button, ChevronIcon } from '../../../components';
import { Label, SupportingText } from '../input';

import { SelectContainer, SelectContent, selectStyles } from './SelectStyles';

interface SelectTypes {
  name: string;
  label: string;
  options: any;
  value?: string;
  placeholder?: string;
  isSupportingText?: boolean;
  supportingType?: 'error';
  supportingText?: string;
  disabled?: boolean;
  required?: boolean;
  isRequiredLabel?: boolean;
  defaultValue?: any;
  onChange?: (e: any) => void;
  getOptionValue?: (e: any) => any;
  onBlur?: (e: any) => void;
}

export const SelectField: FC<SelectTypes> = ({
  name,
  label,
  options = [],
  placeholder = '',
  isSupportingText = false,
  supportingType = 'error',
  supportingText = '',
  disabled = false,
  required = false,
  isRequiredLabel = false,
  defaultValue,
  getOptionValue,
  onChange,
  onBlur,
}) => {
  return (
    <SelectContent>
      <Label htmlFor={name}>
        {label}
        {isRequiredLabel === true && <span> *</span>}
      </Label>
      <SelectContainer>
        <Select
          options={options}
          defaultValue={defaultValue}
          getOptionValue={getOptionValue}
          name={name}
          placeholder={placeholder}
          isDisabled={disabled}
          styles={selectStyles}
          instanceId={useId()}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => (
              <Button ariaLabel="show select options" variant="icon">
                <ChevronIcon />
              </Button>
            ),
          }}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
        />
      </SelectContainer>
      {isSupportingText === true && (
        <SupportingText type={supportingType} message={supportingText} />
      )}
    </SelectContent>
  );
};
