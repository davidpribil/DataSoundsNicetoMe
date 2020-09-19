import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { LeftDrawer } from '../components/drawer/LeftDrawer';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    Star,
    Kitchen,
    FitnessCenter,
    ErrorOutline
} from '@material-ui/icons';

export const HistoryPage = () => {
    const classes = useStyles();
    return (
        <div>
            < LeftDrawer />
            <div className={classes.container}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="18-09-2020"
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<Kitchen />}
                    >
                        <h3 className="vertical-timeline-element-title">+ 10 Points</h3>
                        <h4 className="vertical-timeline-element-subtitle">Nutrition</h4>
                        <p>
                            Tried a healthy recipie
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="13-8-2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FitnessCenter />}
                    >
                        <h3 className="vertical-timeline-element-title">+ 30 Points</h3>
                        <h4 className="vertical-timeline-element-subtitle">Fitness</h4>
                        <p>
                            30 Minutes Jog
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="10-8-2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FitnessCenter />}
                    >
                        <h3 className="vertical-timeline-element-title">+ 30 Points</h3>
                        <h4 className="vertical-timeline-element-subtitle">Fitness</h4>
                        <p>
                            30 Minutes Jog
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="12-2-2020"
                        iconStyle={{ background: 'rgb(242, 98, 87)', color: '#fff' }}
                        icon={<ErrorOutline />}
                    >
                        <h3 className="vertical-timeline-element-title">- 50 Points</h3>
                        <h4 className="vertical-timeline-element-subtitle">Lie Detected</h4>
                        <p>
                            Your picture for "25 Mins Swim" was not approved. If you think there's a mistake, contact customer support.
    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="13-8-2020"
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<Kitchen />}
                    >
                        <h3 className="vertical-timeline-element-title">+ 30 Points</h3>
                        <h4 className="vertical-timeline-element-subtitle">Fitness</h4>
                        <p>
                            30 Minutes Jog
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(174, 107, 250)', color: '#fff' }}
                        icon={<Star />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default HistoryPage;

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            paddingLeft: 280,
            paddingTop: 100,
        },
    }),
);


