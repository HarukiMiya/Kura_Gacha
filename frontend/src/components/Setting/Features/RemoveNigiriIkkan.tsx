import { useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const RemoveNigiriIkkan = () => {
    const { isRemovedNigiriIkkan, setIsRemovedNigiriIkkan} = useContext(SettingContext);

    useEffect(() => {
        localStorage.setItem('isRemovedNigiriIkkan', JSON.stringify(isRemovedNigiriIkkan));
    }, [isRemovedNigiriIkkan]);

    const handleRemovedNigiriIkkan = () => {
        setIsRemovedNigiriIkkan(prev => !prev);
    };

    return (
        <div className={styles.setting_content}>
            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} checked={isRemovedNigiriIkkan} onChange={handleRemovedNigiriIkkan}/>}
                label=""
            />
            <span>にぎり一貫を除く</span>
        </div>
    )
}

export default RemoveNigiriIkkan;