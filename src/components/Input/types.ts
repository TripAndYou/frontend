export interface LabelInputProps {
  label: string
  value: string
  onChangeInput: (value: string) => void
  errorNode?: React.ReactNode
}
