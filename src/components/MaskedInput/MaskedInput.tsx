import React from 'react';
import TextMaskInput from 'react-text-mask';
import Input from '../Input';

interface IMaskedInputProps {}

const MaskedInput: React.FC<IMaskedInputProps> = props => (
  <TextMaskInput
    guide={false}
    {...props}
    render={(ref, { defaultValue, ...renderProps }) => (
      <Input
        value={defaultValue}
        {...renderProps}
        deepRef={ref}
      />
    )}
  />
);

export default MaskedInput;
