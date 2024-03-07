import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';
import { handleToggle } from '../../../utils/handleToggle';

const RemoveSide = () => {
    const { isRemovedSide, setIsRemovedSide} = useContext(SettingContext);

    const handleRemovedSide = handleToggle(setIsRemovedSide);

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