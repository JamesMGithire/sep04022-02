// import logo from './logo.svg';
import './App.css';
import Paragraph from './Paragraphs';

function App() {
  const colors = ["Red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  const pars = colors.map(el => <Paragraph
    value={el}
  />
  )

  return (
    <div className="App">
      {pars}
    </div>
  );
}

export default App;
