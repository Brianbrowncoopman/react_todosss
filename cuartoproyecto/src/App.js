import './App.css';
import { Link, Route, } from "wouter";
import './Style.css';
import GroupeOne from './components/GroupeOne/GroupeOne';
import GroupeTwo from './components/GroupeTwo';
import GroupeTree from './components/GroupeTree';
import GroupeFour from './components/GroupFour';



function App() {
  return (
    <nav className="App">
    <header className="app-header">
    <h1>Bandas de Grunge</h1>
      <Link href="/GroupeOne">
        <button className='btn-bands'>Alice in chains</button>
      </Link>
      <Route path="/GroupeOne" component={GroupeOne}>Alice in chains</Route>

      <Link href="/GroupeTwo">
        <button className='btn-bands'>Soundgarden</button>
      </Link>
      <Route path="/GroupeTwo" component={GroupeTwo}>Soundgarden</Route>

      <Link href="/GroupeTree">
        <button className='btn-bands'>Nirvana</button>
      </Link>
      <Route path="/GroupeTree" component={GroupeTree}>Nirvana</Route>

      <Link href="/Groupefour">
        <button className='btn-bands'>Pearl-jam</button>
      </Link>
      <Route path="/Groupefour" component={GroupeFour}>Pearl-jam</Route>

      
    
    </header>
  </nav>
  );
}

export default App;