import Header from './components/Header/Header';
import YenGatcha from './components/YenGacha/YenGacha';
import Footer from './components/Footer/Footer';
import Setting from './components/Setting/Setting';
import MainButton from './components/MainButton/MainButton';
import { SettingContext } from './store/setting-context';
import { useState } from 'react';

function App() {
  const [isExactPrice, setIsExactPrice] = useState(() => {
    const localData = localStorage.getItem('isExactPrice');
    return localData ? JSON.parse(localData) : true;
  });

  const ctxVal = {
    isExactPrice: isExactPrice,
    setIsExactPrice: setIsExactPrice
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
