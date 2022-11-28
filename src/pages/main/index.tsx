import { useState } from 'react'

const peopleList = [
  {
    name: '허유림',
    age: 20,
  },
  {
    name: '강루림',
    age: 22,
  },
]
const Main = () => {
  const [people, setPeople] = useState({ name: '', age: 30 })
  const [cards, setCards] = useState({ title: '', age: 30 })

  const changeName = () => {
    const firstPeople = peopleList[0]

    setPeople(firstPeople)
  }

  return (
    <div>
      <header>
        <div>여행앤유</div>
        <div>검색</div>
      </header>
      <div>
        <div>
          <button>필터버튼</button>
        </div>
        <div>
          <div>자연</div>
          <div>관광</div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>취향에 따른 추천 여행</div>
            <div>더보기</div>
          </div>
        </div>
        <div>
          <ul>
            {/* 카드 */}
            <li>
              <img src='' alt='' />
              <div>하트</div>
              <div>
                <div>누가누가</div>
                <div>~~~~~~`</div>
              </div>
            </li>
            <li>
              <img src='' alt='' />
              <div>하트</div>
              <div>
                <div>누가누가</div>
                <div>~~~~~~`</div>
              </div>
            </li>
            <li>
              <img src='' alt='' />
              <div>하트</div>
              <div>
                <div>누가누가</div>
                <div>~~~~~~`</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>추천여행지</div>
            <div>더보기</div>
          </div>
        </div>
        <div>
          <ul>
            {/* 카드 */}
            <li>
              <img src='' alt='' />
              <div>하트</div>
              <div>
                <div>누가누가</div>
                <div>~~~~~~`</div>
              </div>
            </li>
            <li>
              <img src='' alt='' />
              <div>하트</div>
              <div>
                <div>누가누가</div>
                <div>~~~~~~`</div>
              </div>
            </li>
            <li>
              <img src='' alt='' />
              <div>하트</div>
              <div>
                <div>누가누가</div>
                <div>~~~~~~`</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main
