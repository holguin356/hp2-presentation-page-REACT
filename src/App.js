import logo from './logo.svg';
import './App.css';
import PopUp from './Components/PopUp';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <div className="App">
        <Header/>
        <Introduction/>
        <AboutMe/>
        <PopUp/>
    </div>
  );
}

export default App;
