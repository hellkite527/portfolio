import { AppProvider } from 'providers/AppProvider'
import { PortfolioPage } from 'components/page'

const Home = () => {
  return (
    <AppProvider>
      <PortfolioPage />
    </AppProvider>
  )
}

export default Home
