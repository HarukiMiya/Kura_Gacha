import React, { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from './Setting.module.css';
// import Switch, { SwitchProps } from '@mui/material/Switch';
// import { styled } from '@mui/material/styles';
import IOSSwitch from './IOSSwitch';

const ExactPrice = () => {

    const handleExactPrice = (e:React.ChangeEvent<HTMLInputElement>) => {
        setExactPrice(e.target.checked);
    };
    const [isExactPrice, setExactPrice] = useState(() => {
        const localData = localStorage.getItem('isExactPrice');
        console.log(localData);
        return localData ? JSON.parse(localData) : true;
    });

    useEffect(() => {
        const dataIsExactPrice = localStorage.getItem('isExactPrice');
        if (dataIsExactPrice != null) setExactPrice(JSON.parse(dataIsExactPrice));
        console.log(isExactPrice)
    }, []);

    useEffect(() => {
        localStorage.setItem('isExactPrice', JSON.stringify(isExactPrice));
        console.log(isExactPrice)
    }, [isExactPrice]);

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