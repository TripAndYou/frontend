import Styled from 'styled-components'

// contents
export const SearchContentsContainer = Styled.section`
  width: 328px;
  margin: 0 auto;
`

// recent search
export const RecentSearchContainer = Styled.div`
  width: 100%;
  height: 170px;
  margin-top: 24px;
  border-bottom: 1px solid var(--color-neutral-300);
`

export const SearchContentsTitle = Styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-neutral-900);
`
export const RecentSearchResultContainer = Styled.div`
  display: flex;
  flex-direction: column;
`

// popular spot
export const PopularSpotContainer = Styled.div`
  width: 100%;
  height: 329px;
  margin-top: 32px;
`

export const PopularSpotGuideContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AllSpotBtn = Styled.button`
  all: unset;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: var(--color-neutral-700);
  cursor: pointer;
`

export const PopularSpotBtnContainer = Styled.div`
  height: 289px;
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  &:after {
    content: "";
    width: 106px;
  }
`

export const PopularSpotBtn = Styled.button`
  all: unset;
  box-sizing: border-box;
  width: 106px;
  height: 44px;
  padding: 12px 16px;
  border: 1px solid var(--color-neutral-300);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-neutral-800);
  cursor: pointer;
`
