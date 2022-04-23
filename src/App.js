import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Heading from './components/heading/Heading';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className='wrapper'> 
        <Header />
        <main>
          <Heading />
          <Content />
        </main>
        </div>
      <Footer />
    </>
  );
}

export default App;
