import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';
import { handleToggle } from '../../../utils/handleToggle';

const RemoveDessert = () => {
    const { isRemovedDessert, setIsRemovedDessert} = useContext(SettingContext);

    const handleRemovedDessert = handleToggle(setIsRemovedDessert);

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