import { IonAvatar, IonButton, IonButtons, IonChip, 
     IonHeader, IonIcon, IonItem, IonLabel, 
     IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { menu } from 'ionicons/icons';
import UserList from '../../components/user-list/user-list';
import './user.css';

const User: React.FC = () => {
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
                  <IonItem lines='none'>
                      <IonTitle>User List</IonTitle>
                      <IonChip class="ion-margin-start" slot='end'>
                          <IonAvatar>
                              <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg" alt='profile-img'/>
                          </IonAvatar>
                          <IonLabel>FL</IonLabel>
                      </IonChip>
                  </IonItem>
              </IonToolbar>
          </IonHeader>
            <UserList />
      </IonPage>
  );
};

export default User;
