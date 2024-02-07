import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const RemoveGunkan = () => {
    const { isRemovedGunkan, setIsRemovedGunkan} = useContext(SettingContext);

    useEffect(() => {
        const dataIsRemovedGunkan = localStorage.getItem('isRemovedGunkan');
        if (dataIsRemovedGunkan != null) setIsRemovedGunkan(JSON.parse(dataIsRemovedGunkan));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem('isRemovedGunkan', JSON.stringify(isRemovedGunkan));
    }, [isRemovedGunkan]);

    const handleRemovedGunkan = () => {
        setIsRemovedGunkan(prev => !prev);
    };

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isRemovedGunkan} onChange={handleRemovedGunkan}/>}
                label=""
            />
            <span>ぐんかん・細巻を除く</span>
        </div>
    )
}

export default RemoveGunkan;