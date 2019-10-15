import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Portfolio - new Ionic React App</IonCardSubtitle>
            <IonCardTitle>VEDANT BHOJ | MS - Computer Engineering | San Jose State University</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
            I am currently pursuing a Masters of Science in Computer Engineering at San Jose State University, California. I completed my under graduation from Vishwakarma Institute of Information Technology, Pune, India with a Bachelor's degree in Electronics and Telecommunication Engineering. My primary areas of interest include Web Development, Data Engineering and Computer Networks. I have 3 years of experience as a Programmer Analyst at Cognizant where I developed and maintained multi-layered web applications for the IT security teams. Currently interning at a Health Care startup as a Full Stack Engineer. I am proficient in JavaScript, C# and have worked with C, JAVA, MATLAB and Python before. I enjoy developing web applications and I am skilled in HTML5, CSS, JavaScript and know frameworks like Angular and ReactJS. Additionally, I have experience developing ETL data pipeline and backend.
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>My Website</IonLabel>
          </IonListHeader>
          <IonItem href="https://vedantbhoj.com/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Vedant's portfolio</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
