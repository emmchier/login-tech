import React, { FC, ChangeEvent, ReactNode, useState, useEffect, useId } from 'react';
import Select from 'react-select';
import { Button } from '../button';
import { InputTypes, Label, SupportingText } from '../input';
import { ChevronIcon } from '../svg';
import { SelectContainer, SelectContent, selectStyles } from './SelectStyles';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

interface SelectTypes {
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  isSupportingText?: boolean;
  supportingType?: 'error';
  supportingText?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}

export const SelectField: FC<SelectTypes> = ({
  name,
  value,
  label,
  placeholder = 'DNI',
  isSupportingText = false,
  supportingType = 'error',
  supportingText = 'Este campo no debe estar vacío',
  required = false,
  disabled = false,
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
