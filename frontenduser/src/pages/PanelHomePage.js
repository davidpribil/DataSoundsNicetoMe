import React from 'react';
import { LeftDrawer } from '../components/drawer/LeftDrawer';
import { PodcastCard } from '../components/cards/PodcastCard';
import { ReminderDialog } from '../components/dialogs/ReminderDialog';
import { ActivityCard } from '../components//cards/ActivityCard';
import { Typography } from '@material-ui/core';

class PanelHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/user/" + localStorage.getItem('userid') + '/recommendation')
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
          <Typography variant="h4" style={{paddingBottom: 30}}>
            Welcome Back!
          </Typography>
          <Typography variant="h6" style={{alignSelf: 'left', paddingBottom: 40}}>
            Podcasts
          </Typography>
          <ReminderDialog reminder={this.state.data} buttonText={"Ok, thanks!"} />
          <div style={{flexDirection: "row", display: "flex", marginBottom: 80}}>
            <PodcastCard title={"Secret to A Satisfactory Life"} moderator={"Mac Miller"} image={"https://media3.s-nbcnews.com/j/newscms/2019_51/1406125/fruits-veggies-today-main-190130_5fce180c233a626539c5c65792a13462.fit-2000w.jpg"} />
            <PodcastCard title={"Party Time for My Plants & Me"} moderator={"Ross Geller"} image={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-hanging-plants-2-1586536688.jpg?crop=1.00xw:0.754xh;0,0.188xh&resize=980:*"} />
            <PodcastCard title={"Healthy VS Oppressive Fear"} moderator={"Michael James"} image={"https://tantdile.com.ng/wp-content/uploads/2019/01/fdf028c1f6b66884648d93fbd8f3ffa3-530x410.jpg"} />
          </div>
          <div style={{flexDirection: "row", display: "flex", marginBottom: 80}}>
          <ActivityCard title={'Go Vegan For a Week'} image={"https://www.moroccansaharatours.com/wp-content/uploads/2018/03/Eating-%E2%80%93-Vegan-Vegetarian-Food-Available-and-Non-Moroccan-Food-Available-.jpg"} details={"Have you ever thought about going vegan? Well, now you can even get a 100 points for trying veganism for a week"} />
          <ActivityCard title={'Learn Backward Swimming'} image={"https://cdn.lifehack.org/wp-content/uploads/2013/09/benefits-of-swimming-1024x700.jpeg"} details={"Did you know that swimming builds endurance, muscle strength and cardiovascular fitness? We're offering you 200 points for trying!"} />
          <ActivityCard title={'Free Yoga Class'} image={"http://www.4vallees.ch/UserFiles/local-miniatures/UserFiles/File/Annuaire/annuaire_produits/yoga/thumbresize/1500-/yoga-a-la-chaux-site.jpg"} details={"We all know from movies that yoga helps calm you down. Not just this but it helps in improved respiration, energy and vitality."} />
          <ActivityCard title={'Increase Dry Fruit Intake'} image={"https://4.imimg.com/data4/IK/RR/ANDROID-42657106/product-500x500.jpeg"} details={"Dry fruits are a great source of proteins, vitamins, minerals, dietary fibre, and an ideal substitute for high-calorie snacks. They make a delicious and healthy snack."} />
          </div>
        </div>
      </div>
    )
  }
};

export default PanelHomePage;
