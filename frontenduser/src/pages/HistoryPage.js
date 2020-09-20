import React, { Component } from 'react';
import { LeftDrawer } from '../components/drawer/LeftDrawer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { TimelineElement } from '../components/timeline/TimelineElement';
import 'react-vertical-timeline-component/style.min.css';
import {
    Star,
} from '@material-ui/icons';
 
class HistoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
    
      componentDidMount() {
        fetch("api/activity/" + localStorage.getItem('userid'))
          .then(response => {
            if (response.status > 400) {
              return this.setState(() => {
                return { placeholder: "Something went wrong!" };
              });
            }
            return response.json();
          })
          .then(data => {
            this.setState(() => {
              return {
                data,
                loaded: true
              };
            });
          });
      }
    
      render() {
        return (
            <div>
                < LeftDrawer />
                <div style={{paddingLeft: 280, paddingTop: 100}}>
                    <VerticalTimeline>
                        {this.state.data.map((element) => {
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
      }
}

export default HistoryPage;

