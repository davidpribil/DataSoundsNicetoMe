import React from 'react';
import { LeftDrawer } from '../components/drawer/LeftDrawer';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { TimelineElement } from '../components/timeline/TimelineElement';
import 'react-vertical-timeline-component/style.min.css';
import {
    Star,
} from '@material-ui/icons';
import { activityData } from "../helpers/data";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            paddingLeft: 280,
            paddingTop: 100,
        },
    }),
);

export const HistoryPage = () => {
    const classes = useStyles();
    return (
        <div>
            < LeftDrawer />
            <div className={classes.container}>
                <VerticalTimeline>
                    {activityData.map((element) => {
                        return (
                            <TimelineElement date={element.ActivityTime} activity={element.BasicActivity} approved={element.approved} category={element.category} points={element.points} />
                        );
                    })}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(174, 107, 250)', color: '#fff' }}
                        icon={<Star />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
};




