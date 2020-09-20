import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    Kitchen,
    FitnessCenter,
    ErrorOutline, 
    CardGiftcard,
    Euro
} from '@material-ui/icons';


const handleIcon = (category) => {
    if (category === "Fitness") {
        return <FitnessCenter />
    }
    else if (category === "Nutrition") {
        return <Kitchen />
    }
    else if (category === "Loyalty"){
        return <CardGiftcard/>
    }
    else{
        return <Euro/>
    }
}

export const TimelineElement = ({ date, activity, approved, points, category }) => {
    if (approved) {
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={date}
                iconStyle={(category === "Fitness") ? { background: 'rgb(33, 150, 243)', color: '#fff' } : { background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={handleIcon(category)}
            >
                <h3 className="vertical-timeline-element-title">+ {points} Points</h3>
                <h4 className="vertical-timeline-element-subtitle">{category}</h4>
                <p>
                    {activity}
                </p>
            </VerticalTimelineElement>

        );
    }
    else {
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={date}
                iconStyle={{ background: 'rgb(242, 98, 87)', color: '#fff' }}
                icon={<ErrorOutline />}
            >
                <h3 className="vertical-timeline-element-title"> - 100 Points</h3>
                <h4 className="vertical-timeline-element-subtitle">Questionable activity</h4>
                <p>
                    Your activity was not approved. If you think there's a mistake, contact customer support.
                             </p>
            </VerticalTimelineElement>

        );
    }

};




