import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAlert, IonCol, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle
  , IonCardSubtitle, IonCardContent
 } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonGrid>
        <IonRow>
          <IonCol>
          <IonTitle>¡ Hola mundo !</IonTitle>
          </IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol></IonCol>
          <IonCol>
          <IonButton id="present-alert">Click Me</IonButton>
          </IonCol>
      <IonAlert
        trigger="present-alert"
        header="Esto es una alerta !"
        subHeader="¿como estas?"
        message="Espero que bien."
        buttons={['OK']}
      ></IonAlert>
      </IonRow>
      </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size="auto">
        <IonCard>
      <img alt="Silhouette of mountains" src="https://png.pngtree.com/background/20220726/original/pngtree-seamless-vector-topographic-map-background-white-on-dark-picture-image_1808474.jpg" />
      <IonCardHeader>
        <IonCardTitle>Hola, mi nombre es David Gustavo</IonCardTitle>
        <IonCardSubtitle>Bienvenido !</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Estoy aprendiendo a usar react y es una chulada de framework.</IonCardContent>
    </IonCard>
    </IonCol>
    </IonRow>
    </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

