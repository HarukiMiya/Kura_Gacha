/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const MaxCal = () => {
    const { isMaxCal, setIsMaxCal} = useContext(SettingContext);

    useEffect(() => {
        const dataIsMaxCal = localStorage.getItem('isMaxCal');
        if (dataIsMaxCal != null) setIsMaxCal(JSON.parse(dataIsMaxCal));
    }, []);

    useEffect(() => {
        localStorage.setItem('isMaxCal', JSON.stringify(isMaxCal));
    }, [isMaxCal]);

    const handleMaxCal = () => {
        setIsMaxCal(prev => !prev);
    };

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isMaxCal} onChange={handleMaxCal}/>}
                label=""
            />
            <span>カロリーを最大にする</span>
        </div>
    )
}

export default MaxCal;