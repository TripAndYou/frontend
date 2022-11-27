import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, LabelInput } from '../../components'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setIsError] = useState(false)

  const handleLoginButton = () => {
    // 로그인 실행
  }

  const handleSignUpButton = () => {
    navigate('/signUp')
  }

  const handleEmailInput = (value: string) => {
    const reg = new RegExp('foo', 'g')

    if (!value.length) setIsError(true)
    else {
      if (!reg.test(value)) setIsError(true)
      else setIsError(false)
    }
  }

  return (
    <form>
      <LabelInput label='이메일' value={email} onChangeInput={handleEmailInput} />
      <Button title='로그인' onClickButton={handleLoginButton} />
      <Button title='회원가입' onClickButton={handleSignUpButton} />
    </form>
  )
}

export default Login
