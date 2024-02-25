import { Container } from "@mui/material";
import AppRouter from "./AppRouter";
import { Header } from "./components/Header";
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}
        
export default App;