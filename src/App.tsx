import { AuthProvider } from '@provider'
import { Layout } from '@components'
import { AppRoutes } from '@routes'

export const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AuthProvider>
  )
}
