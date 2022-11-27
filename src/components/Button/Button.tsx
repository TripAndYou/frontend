import { ButtonProps } from './types'

const Button = ({ title, color = 'white', onClickButton, disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClickButton} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button
