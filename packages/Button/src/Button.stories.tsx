import React from 'react';
import type { StoryObj } from '@storybook/react';
import BButton from './Button';

export default {
  title: 'V5/Buttons/Button',
  component: BButton,
};

type Story = StoryObj<typeof BButton>;

export const Basic: Story = {
  render: (args) => {
    return (
      <>
        <p>버튼의 경우 font weight가 500으로 커스터마이징 되어 있습니다.</p>
        <BButton
          {...args}
          gradient={{
            from: args['gradient.from'],
            to: args['gradient.to'],
            deg: args['gradient.deg'],
          }}
        >
          Button
        </BButton>
      </>
    );
  },
};
