import { CSSProperties } from 'react';
import { CSSObjectWithLabel, StylesConfig } from 'react-select';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const SelectContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(2.5)};

  /* select {
    margin: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(2)} 0;
  } */
`;

export const SelectContainer = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(2)} 0;

  button {
    transform: scale(1.3);
    margin-right: ${({ theme }) => theme.spacing(1)};

    &:hover {
      background: transparent;
    }
  }
`;

export const selectStyles = {
  menuList: (styles: any) => ({
    ...styles,
    borderColor: theme.color.white,
  }),
  option: (styles: any, { isFocused, isSelected }: any) => ({
    ...styles,
    background: isFocused
      ? theme.color.primary.disabled
      : theme.color.white && isSelected && theme.color.white,
    color: isFocused && theme.color.text.primary,
    '&:focus': {
      background: theme.color.primary.disabled,
    },
    '&:active': {
      background: theme.color.primary.disabled,
    },
    borderRadius: theme.border.radius.main,
    paddingLeft: theme.spacing(4),
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 100,
    padding: 5,
    borderRadius: theme.border.radius.main,
    border: `0.5px solid #E4E4E4`,
    boxShadow: theme.elevation.main.dark,
  }),
  control: (styles: any, { isFocused }: any) => ({
    ...styles,
    borderColor: theme.color.text.secondary,
    borderRadius: theme.border.radius.main,
    height: 42,
    '&:hover': {
      borderColor: theme.color.active,
    },
    boxShadow: isFocused && 0,
    border: isFocused && `1px solid ${theme.color.active}`,
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: theme.color.grey,
  }),
  placeholder: (base: any) => ({
    ...base,
    color: theme.color.text.secondary,
  }),
};
