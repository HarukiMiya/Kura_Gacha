import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';
import styles from './Setting.module.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import ExactPrice from './Features/ExactPrice';
import Duplicatable from './Features/Duplicatable';
import MaxCal from './Features/MaxCal';
import RemoveAlco from './Features/RemoveAlco';
import RemoveNigiri from './Features/RemoveNigiri';
import RemoveNigiriIkkan from './Features/RemoveNigiriIkkan';
import RemoveGunkan from './Features/RemoveGunkan';
import RemoveSide from './Features/RemoveSide';
import RemoveDessert from './Features/RemoveDessert';

const Setting = React.memo(() => {
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
      }));

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));

  return (
    <>
        <Icon onClick={handleClickOpen} className={styles.setting_icon} fontSize='large'>
            settings
        </Icon>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
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
                <div className={styles.setting_change}>
                    <div className={styles.setting_content}>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} />}
                            label=""
                        />
                        <span>値段を変更する</span>
                    </div>
                    <div className={styles.content}>
                        <TextField disabled id="outlined-basic" label="1000" variant="outlined" />
                        <div className={styles.gacha}>円ガチャ</div>
                    </div>
                </div>
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