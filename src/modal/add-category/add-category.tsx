/* Using with useIonModal Hook */ 

import React, { useState } from 'react';
import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { render } from '@testing-library/react';
import { closeCircleOutline, menu } from 'ionicons/icons';

const AddCategory: React.FC<{
  count: number;
  onDismiss: () => void;
  onIncrement: () => void;}> = ({ count, onDismiss, onIncrement }) =>
  (
  <><IonHeader translucent>
          <IonToolbar>
            <IonTitle>Add Category</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => onDismiss()}> <IonIcon icon={closeCircleOutline} /></IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
          <IonRow className='ion-padding'>
            <IonCol className='ion-padding'>
              <IonList className='add-category-form'>
                <IonItem>
                  <IonLabel position="stacked">Categroy Name</IonLabel>
                  <IonInput value=''> </IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Sub - Category Name</IonLabel>
                  <IonInput value=''> </IonInput>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='3' className='ion-align-self-center m-auto'>
              <IonButton className='bg-grey' onClick={() => onIncrement()}>Add {count}</IonButton>
            </IonCol>
          </IonRow>
          </IonGrid>
        </IonContent>
      </>
  );
export default AddCategory;