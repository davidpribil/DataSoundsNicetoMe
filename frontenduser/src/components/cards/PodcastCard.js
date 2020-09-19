import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, CardMedia, IconButton } from '@material-ui/core';
import {
    PlayArrow,
} from '@material-ui/icons';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            paddingLeft: 280,
            paddingTop: 100,
        },
        root: {
            display: 'flex',
            width: 480,
            marginRight: 100
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 1,
            paddingBottom: 1,
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);

export const PodcastCard = ({ title, moderator, image }) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {moderator}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="play/pause">
                        <PlayArrow className={classes.playIcon} />
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={image}
                title="Helsena"
            />
        </Card>
    );
};




