import React from 'react';

import { Text } from '../src/atoms/text/Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args} />;

export const Texto = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Texto.args = {
    message: 'Salve mondo',
};




