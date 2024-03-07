import styles from './MainButton.module.css';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BootstrapDialog from '../UI/BootstrapDialog';
import { useContext } from 'react';
import { SettingContext } from '../../store/setting-context';
import { Item } from '../../interfaces/Item';
import Button from '@mui/material/Button';
import { handleClickOpenMainButton } from '../../utils/handleClickOpenMainButton';
import { useResult } from '../../hooks/useResult';

const MainButton = () => {
    const ctx = useContext(SettingContext);

    const [open, setOpen] = useState<boolean>(false);
    const [items, setItems] = useState<Item[]>([]);
    const [valid, setValid] = useState<string>("");

    const customOrder = ['にぎり', 'にぎり一貫', 'ぐんかん・細巻', 'サイドメニュー', 'デザート'];

    const handleClickOpen = () => handleClickOpenMainButton(ctx,setItems,setOpen,setValid);

    const { totPrice, totCal, groupedByCategory } = useResult(items);

    const handleClose = () => setOpen(false);

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
                <DialogContent dividers sx={{"&&": {px:7, py: 3}}}>
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
                            {Object.keys(groupedByCategory).sort((a, b) => {
                                // Sort by the custom order : ['にぎり', 'にぎり一貫', 'ぐんかん・細巻', 'サイドメニュー', 'デザート']
                                    return customOrder.indexOf(a) - customOrder.indexOf(b);
                                }).map((category)=> (
                                <div className={styles.container}>
                                    <div className={styles.category}>
                                        <div>{category}</div>
                                        <img src={`../src/assets/${category}.png`} height="25" style={{padding:'0 10px'}}/>
                                    </div>
                                    <div className={styles.items_container}>
                                        {groupedByCategory[category].map((item) =>(
                                            <div className={styles.item_container}>
                                                <div className={styles.amount}>{item.count}x</div>
                                                <div className={styles.name}>{item.item_name}</div>
                                                <div className={styles.price_cal}>
                                                    <div className={styles.price}>{item.item_price}円 </div>
                                                    <div className={styles.cal}>{item.item_kcal}kcal</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className={styles.result_container}>
                                <div className={styles.content_children}>
                                    <div className={styles.content_item_left_up}>ひこうしき</div>
                                    <div className={styles.content_item_left_bottom}>非公式</div>
                                </div>
                                <div className={styles.result_tot_container}>
                                    <div className={styles.tot_container}>
                                        <div className={styles.tot}>合計</div>
                                        <div className={styles.yen}>
                                            <div className={styles.tot_price}>{totPrice}</div>
                                            <div className={styles.tot_yen}>円</div>
                                        </div>
                                    </div>
                                    <div className={styles.result_cal}>{totCal}kcal</div>
                                </div>
                            </div>
                        </>
                    }
                </DialogContent>
            </BootstrapDialog>
        </>
    )
}

export default MainButton;