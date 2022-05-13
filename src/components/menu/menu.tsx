import {
    IonAccordion,
    IonAccordionGroup,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle
  } from '@ionic/react';
  import { useLocation } from 'react-router-dom';
  import { diamondOutline, diamondSharp, homeOutline, homeSharp, keyOutline, keySharp, peopleCircleOutline, peopleCircleSharp } from 'ionicons/icons';
  import './menu.css';


  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
    subtitle:string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'Home',
      subtitle: 'Homes',
      url: '/dashboard',
      iosIcon: homeOutline,
      mdIcon: homeSharp
    },
    {
      title: 'Account Management',
      url: '/home',
      subtitle: 'Accounts',
      iosIcon: keyOutline,
      mdIcon: keySharp
    },
    {
      title: 'User Management',
      subtitle: 'User',
      url: '/user',
      iosIcon: peopleCircleOutline,
      mdIcon: peopleCircleSharp
    },
    {
      title: 'Device Management',
      subtitle: 'Devices',
      url: '/device',
      iosIcon: diamondOutline,
      mdIcon: diamondSharp
    }
  ];
  
//   const labels = ['Family', 'Friends'];
  
  const Menu: React.FC = () => {
    const location = useLocation();
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list" className='ion-padding'>
            <IonItem lines='none'>
            <img src="assets/images/iot_logo_black.png" className='iot-icon' />
            </IonItem>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  {/* <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem> */}

                      <IonAccordionGroup>
                          <IonAccordion value="{appPage.title}">
                              <IonItem slot="header" className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                  <IonLabel>{appPage.title}</IonLabel>
                              </IonItem>

                              <IonList slot="content">
                                  <IonItem lines="none" className='ml-55' >
                                      <IonLabel>{appPage.subtitle}</IonLabel>
                                  </IonItem>
                              </IonList>
                          </IonAccordion>
                          </IonAccordionGroup>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
          {/* <IonList id="labels-list">
            <IonListHeader>Labels</IonListHeader>
            {labels.map((label, index) => (
              <IonItem lines="none" key={index}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </IonList> */}
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  