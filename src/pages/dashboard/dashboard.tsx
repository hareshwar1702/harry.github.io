import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { menu } from 'ionicons/icons';
import './dashboard.css';

const Dashboard: React.FC = () => {
    const toggleMenu = () => {
        const splitPane = document.querySelector('ion-split-pane');
        const windowWidth = window.innerWidth;
        const splitPaneShownAt = 992;
        const when = `(min-width: ${splitPaneShownAt}px)`;
        if (windowWidth >= splitPaneShownAt) {
          // split pane view is visible
          const open = (splitPane as HTMLIonSplitPaneElement).when === when;
          (splitPane as HTMLIonSplitPaneElement).when = open ? false : when;
        } else {
          // split pane view is not visible
          // toggle menu open
          const menu = (splitPane as HTMLIonSplitPaneElement).querySelector('ion-menu');
          return (menu as HTMLIonMenuElement).open();
        }
       }
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonButtons slot="start">
                      <IonButton onClick={() => toggleMenu()}>
                          <IonIcon icon={menu} />
                      </IonButton>
                  </IonButtons>
                  <IonTitle>Dashboard</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <IonHeader collapse="condense">
                  <IonToolbar>
                      <IonTitle size="large">Dashboard</IonTitle>
                  </IonToolbar>
              </IonHeader>
              {/* <ExploreContainer /> */}
          </IonContent>
      </IonPage>
  );
};

export default Dashboard;
