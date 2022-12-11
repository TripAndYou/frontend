import React, { useState } from 'react'
import { MainFilter, MainHeader, MainTasteList, MainPopularityList } from '../../components'
import MainStyles from './MainStyles'

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

  const changeName = () => {
    const firstPeople = peopleList[0]

    setPeople(firstPeople)
  }
  const onClickTaste = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.target)
  }

  return (
    <>
      <MainStyles />
      <MainHeader />
      <MainFilter selects={['']} onClickTaste={onClickTaste} />
      <MainTasteList />
      <MainPopularityList />
    </>
  )
}

export default Main
