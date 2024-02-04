import Header from './components/Header/Header';
import YenGatcha from './components/YenGacha/YenGacha';
import Footer from './components/Footer/Footer';
import Setting from './components/Setting/Setting';
import MainButton from './components/MainButton/MainButton';
import { SettingContext } from './store/setting-context';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [isExactPrice, setIsExactPrice] = useLocalStorage('isExactPrice', true);

  const ctxVal = {
    isExactPrice,
    setIsExactPrice
  }
  
  return (<SettingContext.Provider value={ctxVal}>
    <Header />
    <Setting />
    <YenGatcha />
    <MainButton />
    <Footer />
  </SettingContext.Provider>);
}

export default App;
