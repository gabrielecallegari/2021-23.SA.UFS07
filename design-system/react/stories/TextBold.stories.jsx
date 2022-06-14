import React from 'react';

import { TextBold } from '../src/atoms/textBold/TextBold';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/TextBold',
  component: TextBold,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextBold {...args} />;

export const Textboldgrass = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Textboldgrass.args = {
    message: 'Salve mondo',
};




