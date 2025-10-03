import { useAuth } from '@hooks'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const mockUser = [
  { id: '1', name: 'Thanh Mai', email: 'admin@gmail.com', password: 'Admin123@' },
  { id: '2', name: 'Mai Thanh', email: 'user@gmail.com', password: 'User123@' },
]

export const Login = () => {
  const { t } = useTranslation()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    // Clear error when user starts typing
    if (emailError) {
      setEmailError('')
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)

    // Clear error when user starts typing
    if (passwordError) {
      setPasswordError('')
    }
  }

  const handleLogin = () => {
    // Reset errors
    setEmailError('')
    setPasswordError('')

    // Validate email format
    if (!emailRegex.test(email)) {
      setEmailError(t('login.email_notice'))
      return
    }

    // Validate password format
    if (!passwordRegex.test(password)) {
      setPasswordError(t('login.password_notice'))
      return
    }

    const foundUser = mockUser.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      login(foundUser)
      alert(`${t('login.greeting')} ${foundUser.name} !`)
      navigate('/') // Redirect to home page after successful login
    } else {
      alert('Invalid email or password')
    }
  }
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center bg-light mt-5">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4 ">{t('login.login')}</h1>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                />
                {emailError && <div className="invalid-feedback d-block">{emailError}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder={t('login.password')}
                  value={password}
                  onChange={handlePasswordChange}
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                />
                {passwordError && <div className="invalid-feedback d-block">{passwordError}</div>}
              </div>

              <button className="btn btn-primary w-100 py-2" onClick={handleLogin}>
                {t('login.login')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
