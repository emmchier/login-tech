import React, { FC, ChangeEvent, ReactNode, useState, useEffect, useId } from 'react';
import Select from 'react-select';
import { Button } from '../button';
import { Label, SupportingText } from '../input';
import { ChevronIcon } from '../svg';
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
  required?: boolean;
  disabled?: boolean;
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
  required = false,
  disabled = false,
  defaultValue,
  getOptionValue,
  onChange,
  onBlur,
}) => {
  return (
    <SelectContent>
      <Label htmlFor={name}>
        {label}
        {required === true && <span> *</span>}
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
        />
      </SelectContainer>
      {isSupportingText === true && (
        <SupportingText type={supportingType} message={supportingText} />
      )}
    </SelectContent>
  );
};
