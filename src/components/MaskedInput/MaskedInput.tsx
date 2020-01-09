import React from 'react';
import TextMaskInput, { maskArray } from 'react-text-mask';
import Input from '../Input';

type MaskedInputProps = {
  inputStyles: any;
  type: string;
  mask: (value: string) => maskArray;
};

const MaskedInput = (props: MaskedInputProps) => (
  <TextMaskInput
    guide={false}
    {...props}
    render={(ref, { defaultValue, ...renderProps }) => (
      <Input value={defaultValue} {...renderProps} deepRef={ref} />
    )}
  />
);

export default MaskedInput;
