import { useEffect, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import styles from '../Setting.module.css';
import IOSSwitch from '../../IOSSwitch';
import Button from '@mui/material/Button';

import { useContext } from 'react';
import { SettingContext } from '../../../store/setting-context';

const ModifyPrice = () => {
    const { desiredPrice, setDesiredPrice} = useContext(SettingContext);

    const [isChangeable, setIsChangeable] = useState(():boolean => {
        const localData = localStorage.getItem("isChangeable");
        return localData ? JSON.parse(localData) : false;
    });

    const [tempPrice, setTempPrice] = useState(():number => {
        const localData = localStorage.getItem("desiredPrice");
        return localData ? JSON.parse(localData) : desiredPrice;
    });

    
    useEffect(() => {
        const dataIsChangeable = localStorage.getItem('isChangeable');
        if (dataIsChangeable != null) setIsChangeable(JSON.parse(dataIsChangeable));
        const dataDesiredPrice = localStorage.getItem('desiredPrice');
        if (dataDesiredPrice != null) setDesiredPrice(JSON.parse(dataDesiredPrice));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem('isChangeable', JSON.stringify(isChangeable));
    }, [isChangeable]);

    useEffect(() => {
        localStorage.setItem('desiredPrice', JSON.stringify(desiredPrice));
    }, [desiredPrice]);


    const handleChangeable = () => {
        setIsChangeable(prev => !prev);
    };

    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.target.value))) {
            setTempPrice(0);
        } else {
            setTempPrice(Number(e.target.value));
        }
    }

    const hundleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDesiredPrice(Number((e.currentTarget.elements[0] as HTMLInputElement).value));
        setTempPrice(Number((e.currentTarget.elements[0] as HTMLInputElement).value));
        setIsChangeable(prev => !prev);
    }

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