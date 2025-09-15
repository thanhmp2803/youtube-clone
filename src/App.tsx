import { useTranslation } from 'react-i18next'

export const App = () => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <h1>{t('welcome')}</h1>
      <p>{t('hello', { name: 'Thanh' })}</p>

      <button onClick={() => i18n.changeLanguage('vi')}>VI</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </>
  )
}
