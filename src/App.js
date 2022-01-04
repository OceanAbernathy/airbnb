import './App.css';

import Navbar from './Components/Navbar.js';
import Main from './Components/Main.js';
import Card from './Components/Card.js';
import data from './Components/data.js';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <div className="Main-Content">
        <Navbar />
        <Main />
        <section className='cards-list'>
          {cards}
        </section>
      </div>
    </div>
  );
}

export default App;
