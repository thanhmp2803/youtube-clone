import { AuthProvider } from '@context'
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
