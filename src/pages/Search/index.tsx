import * as S from './Search.styles'
import { popularSpotList } from '../../utils'
import { SearchHeader, RecentSearchResult } from '../../components/Search'

const Search = () => {
  return (
    <>
      <SearchHeader />
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
