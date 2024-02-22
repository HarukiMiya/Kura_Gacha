import styles from './MainButton.module.css';
import { useState } from 'react';
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

const MainButton = () => {
    const ctx = useContext(SettingContext);

    const [open, setOpen] = useState(false);

    const [items, setItems] = useState<Item[]>([]);

    const handleClickOpen = () => {
        setItems([]);
        setOpen(true);
        ctx.setWaiting(true);
        setTimeout(async () => {
            getValidItems(ctx, setItems);
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
                        <p>計算中</p>
                    }
                    {items.map((item)=> {
                        return <Typography gutterBottom>
                            {item.item_name} {item.item_price} {item.item_category}
                        </Typography>
                    })}
                </DialogContent>
            </BootstrapDialog>
        </>
    )
}

export default MainButton;