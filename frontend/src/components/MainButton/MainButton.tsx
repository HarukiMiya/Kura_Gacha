import styles from './MainButton.module.css';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import BootstrapDialog from '../UI/BootstrapDialog';
import { getRandomItems } from '../../utils/getRandomItems';
import { useContext } from 'react';
import { SettingContext } from '../../store/setting-context';

const MainButton = () => {
    const ctx = useContext(SettingContext);

    const [open, setOpen] = useState(false);

    const [items, setItems] = useState<string[]>([]);

    const getValidItems = () => {
        for (let attempt = 0; attempt < 10000; attempt++) {
            const currItems = getRandomItems(
                ctx.isExactPrice,
                ctx.isDuplicatable,
                ctx.isMaxCal,
                ctx.isRemovedAlco,
                ctx.isRemovedNigiri,
                ctx.isRemovedNigiriIkkan,
                ctx.isRemovedGunkan,
                ctx.isRemovedSide,
                ctx.isRemovedDessert,
                ctx.desiredPrice
            );

            if (currItems) {
                setItems(currItems.map((val) => val.item_name));
                ctx.setWaiting(false);
                return 'valid';
            }
        }
        ctx.setWaiting(false);
        return 'invalid';
    };

    const handleClickOpen = () => {
        setItems([]);
        setOpen(true);
        ctx.setWaiting(true);
        setTimeout(async () => {
            getValidItems();
            ctx.setWaiting(false);
        }, 500);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                        <h1>計算中</h1>
                    }
                    {items.map((item)=> {
                        return <Typography gutterBottom>
                            {item}
                        </Typography>
                    })}
                </DialogContent>
            </BootstrapDialog>
        </>
    )
}

export default MainButton;