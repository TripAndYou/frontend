import * as S from './Search.styles'
import { popularSpotList } from '../../utils'

const RecentSearchResult = ({ text }: { text: string }) => {
  return (
    <S.RecentSearchResult>
      <S.RecentSearchResultText>{text}</S.RecentSearchResultText>
      <S.RecentSearchResultDeleteBtn>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
        >
          <path
            d='M2 2L7 7M7 7L12 12M7 7L12 2M7 7L2 12'
            stroke='#999999'
            strokeWidth='2'
            strokeLinecap='square'
            strokeLinejoin='round'
          />
        </svg>
      </S.RecentSearchResultDeleteBtn>
    </S.RecentSearchResult>
  )
}

const Search = () => {
  return (
    <>
      <S.SearchContainer>
        <S.BackButton>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path d='M16 22L6 12L16 2L17.775 3.775L9.55 12L17.775 20.225L16 22Z' fill='#222222' />
          </svg>
        </S.BackButton>
        <S.SearchInputContainer>
          <S.SearchInput id='searchInput' />
          <S.SearchInputLabel htmlFor='searchInput'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21'
              height='21'
              viewBox='0 0 21 21'
              fill='none'
            >
              <path
                d='M19 19L13.8033 13.8033M13.8033 13.8033C15.1605 12.4461 16 10.5711 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16C10.5711 16 12.4461 15.1605 13.8033 13.8033Z'
                stroke='#999999'
                strokeWidth='2'
                strokeLinecap='square'
                strokeLinejoin='round'
              />
            </svg>
            <S.SearchInputLabelText>여행지를 검색해보세요</S.SearchInputLabelText>
          </S.SearchInputLabel>
        </S.SearchInputContainer>
      </S.SearchContainer>
      <S.SearchContentsContainer>
        <S.RecentSearchContainer>
          <S.SearchContentsTitle>최근 검색어</S.SearchContentsTitle>
          <S.RecentSearchResultContainer>
            <RecentSearchResult text={'제주도'} />
            <RecentSearchResult text={'카페'} />
            <RecentSearchResult text={'바다'} />
          </S.RecentSearchResultContainer>
        </S.RecentSearchContainer>
        <S.PopularSpotContainer>
          <S.PopularSpotGuideContainer>
            <S.SearchContentsTitle>인기 여행지</S.SearchContentsTitle>
            <S.AllSpotBtn>전체 여행지</S.AllSpotBtn>
          </S.PopularSpotGuideContainer>
          <S.PopularSpotBtnContainer>
            {popularSpotList.map((spot: string) => (
              <S.PopularSpotBtn key={spot}>{spot}</S.PopularSpotBtn>
            ))}
          </S.PopularSpotBtnContainer>
        </S.PopularSpotContainer>
      </S.SearchContentsContainer>
    </>
  )
}

export default Search
