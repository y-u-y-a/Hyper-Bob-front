import { OutlinedInputProps, OutlinedInput } from '@mui/material';
import React, { FC } from 'react';
import { colors } from '../config/const';

export const FormInput: FC<OutlinedInputProps> = ({ sx, ...props }) => {
  return (
    <OutlinedInput
      autoFocus={false}
      id="name"
      type="text"
      sx={{
        color: colors.white,
        '& label': {
          color: colors.white,
        },
        '& input[placeholder=*]': {
          color: `${colors.white} !important`,
        },
        '& fieldset': {
          boxShadow: 'none !important',
          borderColor: colors.placeholder,
        },
        '&:hover fieldset': {
          outline: 'none',
          boxShadow: 'none !important',
          borderColor: `${colors.placeholder} !important`,
        },
        // '& .Mui-focused': {},
        ...sx,
      }}
      {...props}
    />
  );
};
