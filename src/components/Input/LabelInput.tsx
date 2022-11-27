import { LabelInputProps } from './types'

const LabelInput = ({ label, value, onChangeInput, errorNode }: LabelInputProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    onChangeInput(inputValue)
  }

  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handleInput} />
      {errorNode}
    </div>
  )
}

export default LabelInput
