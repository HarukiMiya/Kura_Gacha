import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';
import { useUpdateLocalStorage } from '../../../hooks/useUpdateLocalStorage';
import { handleToggle } from '../../../utils/handleToggle';

const Duplicatable = () => {
    const { isDuplicatable, setIsDuplicatable} = useContext(SettingContext);

    useUpdateLocalStorage('isDuplicatable', isDuplicatable);

    const handleDuplicatable = handleToggle(setIsDuplicatable);

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isDuplicatable} onChange={handleDuplicatable}/>}
                label=""
            />
            <span>重複を許す</span>
        </div>
    )
}

export default Duplicatable;