import { memo } from 'react';
import Icon from '@mui/material/Icon';
import styles from './Setting.module.css';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import BootstrapDialog from '../UI/BootstrapDialog';
import ExactPrice from './Features/ExactPrice';
import Duplicatable from './Features/Duplicatable';
import MaxCal from './Features/MaxCal';
import RemoveAlco from './Features/RemoveAlco';
import RemoveNigiri from './Features/RemoveNigiri';
import RemoveNigiriIkkan from './Features/RemoveNigiriIkkan';
import RemoveGunkan from './Features/RemoveGunkan';
import RemoveSide from './Features/RemoveSide';
import RemoveDessert from './Features/RemoveDessert';
import ModifyPrice from './Features/ModifyPrice';

import { useContext } from 'react';
import { SettingContext } from '../../store/setting-context';

const Setting = memo(() => {
    const { openSetting, setOpenSetting} = useContext(SettingContext);

    const handleClickOpenSetting = () => {
        setOpenSetting(true);
    };
    const handleClose = () => {
        setOpenSetting(false);
    };

  return (
    <>
        <Icon onClick={handleClickOpenSetting} className={styles.setting_icon} fontSize='large'>
            settings
        </Icon>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openSetting}
            fullWidth={true}
            maxWidth='sm'
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                設定
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
                <ModifyPrice />
                <ExactPrice />
                <Duplicatable />
                <MaxCal />
                <RemoveAlco />
                <RemoveNigiri />
                <RemoveNigiriIkkan />
                <RemoveGunkan />
                <RemoveSide />
                <RemoveDessert />
            </DialogContent>
        </BootstrapDialog>
    </>
  )
})

export default Setting;