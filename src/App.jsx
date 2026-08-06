import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <div className="ambient-bg" aria-hidden="true" />
      <div className="ambient-noise" aria-hidden="true" />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <Home />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
