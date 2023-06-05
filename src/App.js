import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AnimeList from './components/Animelist';
function App() {  
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AnimeList/>
    </QueryClientProvider>
  );
}

export default App;
