import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
