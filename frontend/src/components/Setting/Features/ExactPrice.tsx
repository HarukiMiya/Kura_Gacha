import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const ExactPrice = () => {
    // Retreiving useState() by using Context API
    const { isExactPrice, setIsExactPrice} = useContext(SettingContext);

    useEffect(() => {
        const dataIsExactPrice = localStorage.getItem('isExactPrice');
        if (dataIsExactPrice != null) setIsExactPrice(JSON.parse(dataIsExactPrice));
    }, []);

    useEffect(() => {
        localStorage.setItem('isExactPrice', JSON.stringify(isExactPrice));
    }, [isExactPrice]);

    const handleExactPrice = () => {
        setIsExactPrice(prev => !prev);
    };

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isExactPrice} onChange={handleExactPrice} />}
                label=""
            />
            <span>値段をピッタリにする</span>
        </div>
    )
}

export default ExactPrice;