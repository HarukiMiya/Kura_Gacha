import Header from './components/Header/Header';
import YenGatcha from './components/YenGacha/YenGacha';
import Footer from './components/Footer/Footer';
import Setting from './components/Setting/Setting';
import MainButton from './components/MainButton/MainButton';
import { SettingContext } from './store/setting-context';
import useLocalStorageBoolean from './hooks/useLocalStorageBoolean';
import useLocalStorageNumber from './hooks/useLocalStorageNumber';
import { useState } from 'react';

function App() {
  const [isExactPrice, setIsExactPrice] = useLocalStorageBoolean('isExactPrice', true);
  const [isDuplicatable, setIsDuplicatable] = useLocalStorageBoolean('isDuplicatable', true);
  const [isMaxCal, setIsMaxCal] = useLocalStorageBoolean('isMaxCal', false);
  const [isRemovedAlco, setIsRemovedAlco] = useLocalStorageBoolean('isRemovedAlco', true);
  const [isRemovedNigiri, setIsRemovedNigiri] = useLocalStorageBoolean('isRemovedNigiri', false);
  const [isRemovedNigiriIkkan, setIsRemovedNigiriIkkan] = useLocalStorageBoolean('isRemovedNigiriIkkan', false);
  const [isRemovedGunkan, setIsRemovedGunkan] = useLocalStorageBoolean('isRemovedGunkan', false);
  const [isRemovedSide, setIsRemovedSide] = useLocalStorageBoolean('isRemovedSide', false);
  const [isRemovedDessert, setIsRemovedDessert] = useLocalStorageBoolean('isRemovedDessert', false);
  const [desiredPrice, setDesiredPrice] = useLocalStorageNumber('desiredPrice', 1000);
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
