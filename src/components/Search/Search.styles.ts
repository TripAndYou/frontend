import Styled from 'styled-components'

// search header
export const SearchContainer = Styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackButton = Styled.button`
  all: unset;
  cursor: pointer;
`

export const SearchInputContainer = Styled.div`
  position: relative;
  width: 300px;
  height: 48px;
  margin-left: 10px;
`

export const SearchInput = Styled.input`
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-neutral-200);
  padding: 0 16px;

  &:focus {
    z-index: 5;
  }
`

export const SearchInputLabel = Styled.label`
  position: absolute;
  top: 12px;
  left: 16px;
  color: var(--color-neutral-500);
  font-weight: bold;
  cursor: text;
`

export const SearchInputLabelText = Styled.span`
  display: inline-block;
  position: absolute;
  width: 240px;
  height: 24px;
  top: 0px;
  left: 28px;
  color: var(--color-neutral-500);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

// recent search
export const RecentSearchResult = Styled.div`
margin-top: 16px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const RecentSearchResultText = Styled.span`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: var(--color-neutral-800);
`

export const RecentSearchResultDeleteBtn = Styled.button`
all: unset;
cursor: pointer;
padding: 0 10px;
`
