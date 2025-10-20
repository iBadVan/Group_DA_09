import { Header } from './components/Header';
import { UserProfile } from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: 16 }}>
        <UserProfile />
        <p>ESTA ES UNA PAGINA MUY SERIA, SEA SERIO COMO EL ELEMENTO 58 DE LA TABLA PERIODICA</p>
      </main>
    </div>
  );
}

export default App;
