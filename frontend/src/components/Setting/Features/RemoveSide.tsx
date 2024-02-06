import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const RemoveSide = () => {
    const { isRemovedSide, setIsRemovedSide} = useContext(SettingContext);

    useEffect(() => {
        const dataIsRemovedSide = localStorage.getItem('isRemovedSide');
        if (dataIsRemovedSide != null) setIsRemovedSide(JSON.parse(dataIsRemovedSide));
    }, []);

    useEffect(() => {
        localStorage.setItem('isRemovedSide', JSON.stringify(isRemovedSide));
    }, [isRemovedSide]);

    const handleRemovedSide = () => {
        setIsRemovedSide(prev => !prev);
    };

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isRemovedSide} onChange={handleRemovedSide}/>}
                label=""
            />
            <span>サイドメニューを除く</span>
        </div>
    )
}

export default RemoveSide;