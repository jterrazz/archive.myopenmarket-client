import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Home, HomeProps } from '~/components/templates/Home';

export default {
    title: 'Pages/Home',
    component: Home,
} as Meta;

const Template: Story<HomeProps> = (args) => <Home {...args} />;

export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//     ...HeaderStories.LoggedIn.args,
// };
