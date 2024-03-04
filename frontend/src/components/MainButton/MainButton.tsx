import styles from './MainButton.module.css';
import { useEffect, useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import BootstrapDialog from '../UI/BootstrapDialog';
import { useContext } from 'react';
import { SettingContext } from '../../store/setting-context';
import { getValidItems } from '../../utils/getValidItems';
import { Item } from '../../interfaces/Sushi';
import Button from '@mui/material/Button';

const MainButton = () => {
    const ctx = useContext(SettingContext);

    const [open, setOpen] = useState<boolean>(false);

    const [items, setItems] = useState<Item[]>([]);

    const [valid, setValid] = useState<string>("");

    const handleClickOpen = () => {
        setItems([]);
        setOpen(true);
        ctx.setWaiting(true);
        setTimeout(async () => {
            setValid(getValidItems(ctx, setItems));
            ctx.setWaiting(false);
            // console.log(items);
        }, 500);
    };

    useEffect(() => {
        console.log("items", items);
        const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
        console.log("totPrice",totalPrice);
        const totalCal: number = items.reduce((acc, comb) => acc + comb.item_kcal, 0);
        console.log("totalCal", totalCal);
    }, [items]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenSetting = () => {
        ctx.setOpenSetting(true);
        handleClose();
    }

    return (
        <>
            <div className={styles.btn_container}>
                <div className={styles.btn_out} />
                <button onClick={handleClickOpen} className={styles.btn_in}/>
            </div>
            <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    結果
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    {ctx.waiting &&
                        <p style={{padding:'0 1rem'}}>計算中</p>
                    }
                    {!ctx.waiting && (valid == 'impossible' || valid == 'invalid') && ctx.isExactPrice &&
                        <div className={styles.invalid}>
                            <p className={styles.invalid_child}>{ctx.desiredPrice}円ピッタリの組み合わせは見つかりませんでした。</p>
                            <Button onClick={handleClickOpenSetting} variant="contained" style={{backgroundColor: "black", margin:'1rem 0'}}>設定を変える</Button>
                        </div>
                    }
                    {!ctx.waiting && (valid == 'impossible' || valid == 'invalid') && !ctx.isExactPrice &&
                        <div className={styles.invalid}>
                            <p className={styles.invalid_child}>{ctx.desiredPrice}円に近い組み合わせは見つかりませんでした。</p>
                            <Button onClick={handleClickOpenSetting} variant="contained" style={{backgroundColor: "black", margin:'1rem 0'}}>設定を変える</Button>
                        </div>
                    }
                    {!ctx.waiting && ( valid == 'valid') && 
                        <>
                            {items.map((item)=> {
                                return <Typography gutterBottom>
                                    {item.item_name} {item.item_price} {item.item_category}
                                </Typography>
                            })}
                        </>
                    }
                </DialogContent>
            </BootstrapDialog>
        </>
    )
}

export default MainButton;