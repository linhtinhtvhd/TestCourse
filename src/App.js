
import './App.css';
// import Sidebar from './layouts/components/Container/Sidebar/Sidebar';
import Container from './layouts/components/Container/Container';
import Sidebar from './layouts/components/Sidebar/Sidebar';
import Footer from './layouts/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='inner'>
          <Sidebar/>
          <Container/>
         <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
