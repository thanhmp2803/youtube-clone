import { AuthProvider } from '@provider'
import { Layout } from '@components'
import { AppRoutes } from '@routes'
import { SearchProvider } from '@provider'

export const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </SearchProvider>
    </AuthProvider>
  )
}
