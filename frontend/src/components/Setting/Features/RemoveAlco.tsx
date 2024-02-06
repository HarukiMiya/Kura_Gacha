import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const RemoveAlco = () => {
    const { isRemovedAlco, setIsRemovedAlco} = useContext(SettingContext);

    useEffect(() => {
        const dataIsRemovedAlco = localStorage.getItem('isRemovedAlco');
        if (dataIsRemovedAlco != null) setIsRemovedAlco(JSON.parse(dataIsRemovedAlco));
    }, []);

    useEffect(() => {
        localStorage.setItem('isRemovedAlco', JSON.stringify(isRemovedAlco));
    }, [isRemovedAlco]);

    const handleRemovedAlco = () => {
        setIsRemovedAlco(prev => !prev);
    };

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isRemovedAlco} onChange={handleRemovedAlco} />}
                label=""
            />
            <span>酒類を除く</span>
        </div>
    )
}

export default RemoveAlco