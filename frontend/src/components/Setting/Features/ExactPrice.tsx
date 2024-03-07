import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';
import { useUpdateLocalStorage } from '../../../hooks/useUpdateLocalStorage';
import { handleToggle } from '../../../utils/handleToggle';

const ExactPrice = () => {
    const { isExactPrice, setIsExactPrice} = useContext(SettingContext);

    useUpdateLocalStorage('isExactPrice', isExactPrice);

    const handleExactPrice = handleToggle(setIsExactPrice);

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isExactPrice} onChange={handleExactPrice} />}
                label=""
            />
            <span>値段をピッタリにする</span>
        </div>
    )
}

export default ExactPrice;