import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const Duplicatable = () => {
    const { isDuplicatable, setIsDuplicatable} = useContext(SettingContext);

    useEffect(() => {
        const dataIsDuplicatable = localStorage.getItem('isDuplicatable');
        if (dataIsDuplicatable != null) setIsDuplicatable(JSON.parse(dataIsDuplicatable));
    }, []);

    useEffect(() => {
        localStorage.setItem('isDuplicatable', JSON.stringify(isDuplicatable));
    }, [isDuplicatable]);

    const handleDuplicatable = () => {
        setIsDuplicatable(prev => !prev);
    };

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

export default Duplicatable