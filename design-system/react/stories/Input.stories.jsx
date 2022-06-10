import React from 'react';

import { Input } from '../src/atoms/input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Input',

  component: Input,
  argTypes: { 
      
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const TextA = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextA.args = {
  id:"text",
  placeholder: "mio placeholder",
  onData: undefined,
  isValid: undefined,
  type: 'text',

};

export const Radio = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Radio.args = {
  id:"radio",
  placeholder: "A PLACEHOLDER",
  onData: undefined,
  isValid: undefined,
  type: 'radio',
  label:"This is a label",
};


