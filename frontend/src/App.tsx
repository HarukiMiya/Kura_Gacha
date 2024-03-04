import Header from './components/Header/Header';
import YenGatcha from './components/YenGacha/YenGacha';
import Footer from './components/Footer/Footer';
import Setting from './components/Setting/Setting';
import MainButton from './components/MainButton/MainButton';
import { SettingContext } from './store/setting-context';
import useLocalStorage from './hooks/useLocalStorage';
import { useState } from 'react';

function App() {
  const [isExactPrice, setIsExactPrice] = useLocalStorage('isExactPrice', true);
  const [isDuplicatable, setIsDuplicatable] = useLocalStorage('isDuplicatable', true);
  const [isMaxCal, setIsMaxCal] = useLocalStorage('isMaxCal', false);
  const [isRemovedAlco, setIsRemovedAlco] = useLocalStorage('isRemovedAlco', true);
  const [isRemovedNigiri, setIsRemovedNigiri] = useLocalStorage('isRemovedNigiri', false);
  const [isRemovedNigiriIkkan, setIsRemovedNigiriIkkan] = useLocalStorage('isRemovedNigiriIkkan', false);
  const [isRemovedGunkan, setIsRemovedGunkan] = useLocalStorage('isRemovedGunkan', false);
  const [isRemovedSide, setIsRemovedSide] = useLocalStorage('isRemovedSide', false);
  const [isRemovedDessert, setIsRemovedDessert] = useLocalStorage('isRemovedDessert', false);
  const [desiredPrice, setDesiredPrice] = useLocalStorage('desiredPrice', 1000);
  const [waiting, setWaiting] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  const ctxVal = {
    isExactPrice,
    setIsExactPrice,
    isDuplicatable,
    setIsDuplicatable,
    isMaxCal,
    setIsMaxCal,
    isRemovedAlco,
    setIsRemovedAlco,
    isRemovedNigiri,
    setIsRemovedNigiri,
    isRemovedNigiriIkkan,
    setIsRemovedNigiriIkkan,
    isRemovedGunkan,
    setIsRemovedGunkan,
    isRemovedSide,
    setIsRemovedSide,
    isRemovedDessert,
    setIsRemovedDessert,
    desiredPrice,
    setDesiredPrice,
    waiting,
    setWaiting,
    openSetting,
    setOpenSetting
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
