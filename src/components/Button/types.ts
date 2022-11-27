export interface ButtonProps {
  title: string
  color?: 'white' | 'black'
  onClickButton: () => void
  disabled?: boolean
}
