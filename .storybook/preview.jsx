import { DocsContainer } from '@storybook/addon-docs';

export const parameters = {
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        {children}
      </DocsContainer>
    ),
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
};
