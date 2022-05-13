import { IonContent, IonGrid, IonRow, IonCol, IonSearchbar, IonButton, IonList, 
    IonListHeader, IonLabel, IonItem, IonBadge, IonInput, IonImg, IonAvatar } from '@ionic/react';
import './user-list.css';
import React, { useState } from 'react';
// interface ContainerProps { }
// import { useHistory } from "react-router-dom";

const UserList: React.FC = () => {
    // const [present, dismiss] = useIonLoading();
    const [isShown, setIsShown] = useState(false);
    const [isAddform, showAddform] = useState(false);
  return (
    <IonContent fullscreen>
    <IonGrid>

          {!isAddform ? 
                        <><IonRow>
                            <IonCol pushXl='5' sizeXl='5' sizeLg='5' sizeSm='8' sizeXs='8'>
                                <IonSearchbar value=''></IonSearchbar>
                            </IonCol>
                            <IonCol pushXl='4' sizeXl='3' sizeLg='3' sizeSm='4' sizeXs='4' className='ion-align-self-center ion-text-right'>
                                <IonButton className='bg-grey' onClick={() => showAddform(true)}>Add user</IonButton>
                            </IonCol>
                        </IonRow>
                      <IonRow>
                          <IonCol sizeXl='12' sizeLg='12'>
                              <IonList className='user-list'>
                                  <IonListHeader lines="inset">
                                      <IonLabel>Status</IonLabel>
                                      <IonLabel>Name</IonLabel>
                                      <IonLabel>Username</IonLabel>
                                  </IonListHeader>
                                  <IonItem>
                                      <IonLabel><IonBadge color="success">Active</IonBadge></IonLabel>
                                      <IonLabel>Damian Walsh</IonLabel>
                                      <IonLabel>Damian.Walsh@iotstation.com</IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonLabel><IonBadge color="success" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>.
                                          {isShown && (
                                              <span>Active</span>
                                          )}
                                      </IonBadge></IonLabel>
                                      <IonLabel>Damian Walsh</IonLabel>
                                      <IonLabel>Damian.Walsh@iotstation.com</IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonLabel><IonBadge color="medium">InActive</IonBadge></IonLabel>
                                      <IonLabel>Damian Walsh</IonLabel>
                                      <IonLabel>Damian.Walsh@iotstation.com</IonLabel>
                                  </IonItem>
                                  <IonItem>
                                      <IonLabel><IonBadge color="medium">InActive</IonBadge></IonLabel>
                                      <IonLabel>Damian Walsh</IonLabel>
                                      <IonLabel>Damian.Walsh@iotstation.com</IonLabel>
                                  </IonItem>
                              </IonList>

                          </IonCol>
                      </IonRow></>
            :            
                    <><IonRow className='ion-padding'>
                      <IonCol className='add-profile ion-padding' sizeLg='5' sizeXl='4' sizeMd='6' sizeSm='6' sizeXs='12' push-xl='2'>
                          <IonItem lines='none'>
                              <IonAvatar slot="start">
                                  <IonImg src='https://ionicframework.com/docs/demos/api/avatar/avatar.svg' alt='profil-img' />
                              </IonAvatar>

                          </IonItem>
                          <IonItem lines='none'>
                              <IonLabel>Click to add or edit picture</IonLabel>
                          </IonItem>
                      </IonCol>
                      <IonCol className='ion-padding' sizeLg='5' sizeXl='4' sizeMd='6' sizeSm='6' sizeXs='12' push-xl='2'>
                          <IonList className='add-form'>
                              <IonItem>
                                  <IonLabel position="stacked">First Name</IonLabel>
                                  <IonInput value=''> </IonInput>
                              </IonItem>
                              <IonItem>
                                  <IonLabel position="stacked">Last Name</IonLabel>
                                  <IonInput value=''> </IonInput>
                              </IonItem>
                              <IonItem>
                                  <IonLabel position="stacked">Email</IonLabel>
                                  <IonInput value=''> </IonInput>
                              </IonItem>
                              <IonItem>
                                  <IonLabel position="stacked">Organization</IonLabel>
                                  <IonInput value=''> </IonInput>
                              </IonItem>
                          </IonList>
                      </IonCol>
                  </IonRow><IonRow>
                          <IonCol sizeLg='7' sizeMd='8' sizeXl='5' sizeSm='12' className='ion-align-self-center m-auto'>
                              <IonButton className='bg-grey' onClick={() => showAddform(false)}>Add user</IonButton>
                              <IonButton className='bg-grey ion-float-right' onClick={() => showAddform(false)}>Cancel</IonButton>
                          </IonCol>
                      </IonRow></>}
    </IonGrid>
</IonContent>
  );
};

export default UserList;
