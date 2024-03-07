import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const RemoveNigiri = () => {
    const { isRemovedNigiri, setIsRemovedNigiri} = useContext(SettingContext);

    useEffect(() => {
        localStorage.setItem('isRemovedNigiri', JSON.stringify(isRemovedNigiri));
    }, [isRemovedNigiri]);

    const handleRemovedNigiri = () => {
        setIsRemovedNigiri(prev => !prev);
    };

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isRemovedNigiri} onChange={handleRemovedNigiri}/>}
                label=""
            />
            <span>にぎりを除く</span>
        </div>
    )
}

export default RemoveNigiri;