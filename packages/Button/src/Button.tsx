import type { ButtonProps } from '@mantine/core';
import {
  Button as MantineButton,
  createPolymorphicComponent,
} from '@mantine/core';
import type {} from '@mantine/utils';
import { forwardRef } from 'react';

const _Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <MantineButton {...props} />;
});

_Button.displayName = 'Button';

const Button = createPolymorphicComponent<'button', ButtonProps>(_Button);

export type { ButtonProps };
export default Button;
