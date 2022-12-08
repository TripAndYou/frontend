import Styled from 'styled-components'

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
  background: #F5F5F5;
  padding: 0 16px;

  &:focus {
    z-index: 5;
  }
`

export const SearchInputLabel = Styled.label`
  position: absolute;
  top: 12px;
  left: 16px;
  color: #999999;
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
  color: #999999;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`

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
  border-bottom: 1px solid #EEEEEE;
`

export const SearchContentsTitle = Styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`
export const RecentSearchResultContainer = Styled.div`
  display: flex;
  flex-direction: column;
`

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
  color: #444444;
`

export const RecentSearchResultDeleteBtn = Styled.button`
  all: unset;
  cursor: pointer;
  padding: 0 10px;
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
  color: #666666;
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
  border: 1px solid #EEEEEE;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #444444;
  cursor: pointer;
`
