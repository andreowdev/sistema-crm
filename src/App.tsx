import { ThemeProvider } from './components/ThemeProvider'
import Route from './routes/routes'

export default function App() {

  return (
    <ThemeProvider>

      <Route />
    </ThemeProvider>
  )
}
