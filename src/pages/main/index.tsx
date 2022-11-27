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

  const changeName = () => {
    const firstPeople = peopleList[0]

    setPeople(firstPeople)
  }

  return (
    <div>
      <button onClick={changeName}>사람 이름 변경</button>
      <h1>이름 :</h1>
      <span>{people.name}</span>
    </div>
  )
}

export default Main
