import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CatFacts } from "./catFacts";

const client = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <CatFacts />
    </QueryClientProvider>
  );
}

export default App;
