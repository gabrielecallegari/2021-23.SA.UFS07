import React from 'react';

import { Paragraph } from '../src/molecules/paragraph/Paragraph';
import { Text } from '../src/atoms/text/Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/Paragraph',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Paragraph {...args}></Paragraph>;

export const Texto = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Texto.args = {
    children: <Text message={'message'}></Text>
};




