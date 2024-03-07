import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';
import { handleToggle } from '../../../utils/handleToggle';

const RemoveAlco = () => {
    const { isRemovedAlco, setIsRemovedAlco} = useContext(SettingContext);

    const handleRemovedAlco = handleToggle(setIsRemovedAlco);

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

export default RemoveAlco;