import Button from '@mui/material/Button';
import Header from './components/Header';
import YenGatcha from './components/YenGacha';
import Footer from './components/Footer';
import Setting from './components/Setting';

function App() {
  return (<>
    <Header />
    <Setting />
    <YenGatcha />
    <Button variant="contained">Hello world</Button>
    <Footer />
  </>);
}

export default App;
