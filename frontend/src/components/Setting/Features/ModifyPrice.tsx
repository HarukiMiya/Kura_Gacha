import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import styles from '../Setting.module.css';
import IOSSwitch from '../../UI/IOSSwitch';
import Button from '@mui/material/Button';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';
import useLocalStorageBoolean from '../../../hooks/useLocalStorageBoolean';
import useLocalStorageNumber from '../../../hooks/useLocalStorageNumber';

import { handleChangePriceUtil } from '../../../utils/handleChangePriceUtil';
import { handleSubmitChangePrice } from '../../../utils/handleSubmitChangePrice';
import { handleToggle } from '../../../utils/handleToggle';

const ModifyPrice = () => {
    const { desiredPrice, setDesiredPrice} = useContext(SettingContext);
    const [isChangeable, setIsChangeable] = useLocalStorageBoolean('isChangeable', false);
    const [tempPrice, setTempPrice] = useLocalStorageNumber('desiredPrice', desiredPrice);

    const handleChangeable = handleToggle(setIsChangeable);
    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => handleChangePriceUtil(e, setTempPrice);
    const hundleSubmit = (e: React.FormEvent<HTMLFormElement>) => handleSubmitChangePrice(e, setDesiredPrice, setTempPrice, setIsChangeable);

    return (
        <div className={styles.setting_change}>
            <div className={styles.setting_content}>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} checked={isChangeable} onChange={handleChangeable}/>}
                    label=""
                />
                <span>値段を変更する</span>
            </div>
            {isChangeable && <form autoComplete='off' onSubmit={hundleSubmit} className={styles.content}>
                <TextField id="outlined-basic" type='text' label={desiredPrice} variant="outlined" onChange={handleChangePrice} value={tempPrice} />
                <div className={styles.gacha}>円ガチャ</div>
                <Button variant="contained" type="submit">変更</Button>
            </form>
            }
            {!isChangeable && <div className={styles.content}>
                <TextField disabled id="outlined-basic" label={desiredPrice} variant="outlined" />
                <div className={styles.gacha}>円ガチャ</div>
                <Button variant="contained" disabled>変更</Button>
            </div>
            }
        </div>
    )
}

export default ModifyPrice;