/* eslint-disable react-hooks/exhaustive-deps */
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';
import { handleToggle } from '../../../utils/handleToggle';

const MaxCal = () => {
    const { isMaxCal, setIsMaxCal} = useContext(SettingContext);

    const handleMaxCal = handleToggle(setIsMaxCal);

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