import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const RemoveDessert = () => {
    const { isRemovedDessert, setIsRemovedDessert} = useContext(SettingContext);

    useEffect(() => {
        localStorage.setItem('isRemovedDessert', JSON.stringify(isRemovedDessert));
    }, [isRemovedDessert]);

    const handleRemovedDessert = () => {
        setIsRemovedDessert(prev => !prev);
    };

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isRemovedDessert} onChange={handleRemovedDessert}/>}
                label=""
            />
            <span>デザートを除く</span>
        </div>
    )
}

export default RemoveDessert;