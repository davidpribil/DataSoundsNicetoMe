import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DialogTitle, Dialog, DialogContentText, DialogContent } from '@material-ui/core';
import { DialogButton } from '../buttons/DialogButton';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            paddingLeft: 280,
            paddingTop: 100,
        },

    }),
);
export const ReminderDialog = ({ reminder, buttonText }) => {

    const [openReminder, setOpenReminder] = useState(true)

    const classes = useStyles();
    return (
        <Dialog open={openReminder}>
            <DialogTitle>Reminder</DialogTitle>
            <DialogContent >
                <DialogContentText>
                   {reminder}
          </DialogContentText>
                <div className={classes.reminderContainer}>
                    <DialogButton text={buttonText} onPress={() => setOpenReminder(!openReminder)} />
                </div>
            </DialogContent>
        </Dialog>
    );
};




