import React from 'react';

import { Image } from '../src/atoms/image/Image';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Image',

  component: Image,
  argTypes: { 
      
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Image {...args} />;

export const Image_Command = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Image_Command.args = {
  src: "link",
};



