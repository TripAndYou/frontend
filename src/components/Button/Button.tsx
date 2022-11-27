import { ButtonProps } from './types'

const Button = ({ title, color = 'white', onClickButton }: ButtonProps) => {
  return <button onClick={onClickButton}>{title}</button>
}

export default Button
