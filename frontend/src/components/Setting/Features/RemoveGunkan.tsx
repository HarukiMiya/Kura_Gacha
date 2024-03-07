import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';
import { useUpdateLocalStorage } from '../../../hooks/useUpdateLocalStorage';
import { handleToggle } from '../../../utils/handleToggle';

const RemoveGunkan = () => {
    const { isRemovedGunkan, setIsRemovedGunkan} = useContext(SettingContext);

    useUpdateLocalStorage('isRemovedGunkan', isRemovedGunkan);

    const handleRemovedGunkan = handleToggle(setIsRemovedGunkan);

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