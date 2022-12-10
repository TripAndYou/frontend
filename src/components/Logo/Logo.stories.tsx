import { Story } from '@storybook/react'
import Logo from './index'
import { LogoProps } from './types'

export default {
  title: 'components/Logo',
  component: Logo,
  argTypes: {
    size: {
      description: '로고에 대한 사이즈를 선택할 수 있습니다.',
    },
  },
}

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Default = Template.bind({})
