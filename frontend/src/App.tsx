import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Header from './components/Header';
import YenGatcha from './components/YenGatcha';
import Footer from './components/Footer';

function App() {
  return (<>
    <Header />
    <Icon>settings</Icon>
    <YenGatcha />
    <Button variant="contained">Hello world</Button>
    <Footer />
  </>);
}

export default App;
