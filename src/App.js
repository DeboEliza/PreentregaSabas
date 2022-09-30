
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CardWidget from './components/CardWidget';



function App() {
  return (
  <div>
    <NavBar />
    <ItemListContainer />
    <hr/>
    <CardWidget/>
    </div>
  );
}

export default App;
