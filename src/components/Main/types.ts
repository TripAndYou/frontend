export interface MainFilterProps {
  selects: string[]
  onClickTaste: (event: React.MouseEvent<HTMLElement>) => void
  errorNode?: React.ReactNode
}
