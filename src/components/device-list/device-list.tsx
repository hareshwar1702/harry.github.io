import {
    IonContent, IonGrid, IonRow, IonCol, IonSearchbar, IonButton, IonList,
    IonListHeader, IonLabel, IonItem, IonBadge, IonInput,
    useIonLoading, IonImg, IonAvatar, IonModal
} from '@ionic/react';
import {  useIonModal } from '@ionic/react';
import './device-list.css';
import React, { useState } from 'react';
import AddCategory from '../../modal/add-category/add-category';
// interface ContainerProps { }

const DeviceList: React.FC = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
      };
    
      const handleDismiss = () => {
        dismiss();
      };

      const [present, dismiss] = useIonModal(AddCategory, {
        count,
        onDismiss: handleDismiss,
        onIncrement: handleIncrement,
      });
    return (
        <IonContent fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol pushXl='5' sizeXl='5' sizeLg='5' sizeSm='8' sizeXs='6'>
                        <IonSearchbar value=''></IonSearchbar>
                    </IonCol>
                    <IonCol pushXl='4' sizeXl='3' sizeLg='3' sizeSm='4' sizeXs='4' className='ion-align-self-center ion-text-right'>
                        <IonButton className='bg-grey' onClick={() => {
                            present({
                            cssClass: 'add-category',
                            backdropDismiss:false,
                            });
                        }} >Import Devices</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol sizeXl='12' sizeLg='12'>
                        <IonList className='device-list'>
                            <IonListHeader lines="inset">
                                <IonLabel>Status</IonLabel>
                                <IonLabel>Serial No</IonLabel>
                                <IonLabel>Name</IonLabel>
                                <IonLabel>Type</IonLabel>
                                <IonLabel>Battery Level</IonLabel>
                            </IonListHeader>
                            <IonItem>
                                <IonLabel><IonBadge color="success">Active</IonBadge></IonLabel>
                                <IonLabel>123456</IonLabel>
                                <IonLabel>Damian Walsh</IonLabel>
                                <IonLabel>type 1</IonLabel>
                                <IonLabel>50%</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel><IonBadge color="success">
                                    <span>Active</span>
                                </IonBadge></IonLabel>
                                <IonLabel>123456</IonLabel>
                                <IonLabel>Damian Walsh</IonLabel>
                                <IonLabel>type 1</IonLabel>
                                <IonLabel>50%</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel><IonBadge color="medium">InActive</IonBadge></IonLabel>
                                <IonLabel>123456</IonLabel>
                                <IonLabel>Damian Walsh</IonLabel>
                                <IonLabel>type 1</IonLabel>
                                <IonLabel>50%</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel><IonBadge color="medium">InActive</IonBadge></IonLabel>
                                <IonLabel>123456</IonLabel>
                                <IonLabel>Damian Walsh</IonLabel>
                                <IonLabel>type 1</IonLabel>
                                <IonLabel>50%</IonLabel>
                            </IonItem>
                        </IonList>

                    </IonCol>
                </IonRow>

            </IonGrid>

        </IonContent>
    );
};

export default DeviceList;
