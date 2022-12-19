import { useState } from 'react'
import { QueryClient } from 'react-query'
import reactLogo from './assets/react.svg'
import './App.css'
import TicketTable from './TicketTable'
import Header from './Header'
import { QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <TicketTable />
      </QueryClientProvider>
    </div>
  )
}

export default App
