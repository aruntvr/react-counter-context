import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
      <header className="App-header">
       <Header headerName='Header Counter' />
      <Counter/>
      </header>
    </div>
  );
}

export default App;
