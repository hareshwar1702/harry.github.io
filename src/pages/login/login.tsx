import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRippleEffect, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import './login.css';
import { useHistory } from "react-router-dom";
const Login: React.FC = () => {
    let history = useHistory();
    const submitLogin = () => {
     history.push("/home");
    }

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        <IonGrid className='login-bg-img ion-padding-horizontal'>
            <IonRow>
                      <IonCol sizeXl='4' sizeLg='5' sizeMd='5' sizeSm='5' sizeXs='12'>
                          <IonCard className='ion-margin-start ml-3 bg-transparent'>
                              <IonCardHeader>
                                  <IonCardTitle>
                                  <img src="assets/images/iot_logo.png" className='' />
                                  </IonCardTitle>
                              </IonCardHeader>
                              <IonCardContent className='ion-margin-top'>
                                  <IonSegment value='signin' onIonChange={e => console.log('Segment selected', e.detail.value)}>
                                      <IonSegmentButton value="signin">
                                          <IonLabel>Sign In</IonLabel>
                                      </IonSegmentButton>
                                      <IonSegmentButton value="register">
                                          <IonLabel>Register</IonLabel>
                                      </IonSegmentButton>
                                  </IonSegment>
                                  <IonList>
                                      <IonItem className='ion-margin-top'>
                                          <IonLabel position="floating">Username</IonLabel>
                                          <IonInput type='text' value=''>
                                       
                                          </IonInput>
                                          <img src="assets/images/userIcon2.png" className='login-icon' />
                                      </IonItem>
                                      <IonItem className='ion-margin-top'>
                                          <IonLabel position="floating">Password</IonLabel>
                                          <IonInput type='password'></IonInput>
                                          <img src="assets/images/lock_1.png" className="login-icon" />
                                      </IonItem>
                                    {/* <IonItem>
                                        <IonLabel position="stacked">Stacked Label</IonLabel>
                                        <IonInput value=''> </IonInput>
                                    </IonItem> */}
                                    <IonRow className='ion-padding ion-margin-top'>
                                        <IonCol>
                                          <IonCheckbox class="mr-2" >
                                          </IonCheckbox>
                                          <IonLabel class="mr-2">Remember Me</IonLabel>
                                        </IonCol>
                                        <IonCol className='ion-text-right'>
                                        <IonLabel>Forgot Password</IonLabel>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow className='ion-margin-top mt-4'>
                                        <IonCol>
                                              <IonButton size='large' className='signin-btn' onClick={() =>submitLogin()}> Sign In
                                                  <IonRippleEffect type="unbounded"></IonRippleEffect>
                                              </IonButton>
                                        </IonCol>    
                                    </IonRow>  
                                  </IonList>
                              </IonCardContent>
                          </IonCard>
                      </IonCol>
                      <IonCol sizeXl='8' sizeLg='7' sizeMd='7' sizeSm='7' sizeXs='ion-hide' className='ion-hide-md-down'>
                          <IonRow>
                              <IonCol class='ion-text-right'>
                                  <img src="assets/images/yan_logo.png" />
                              </IonCol>
                          </IonRow>
                          <IonRow>
                              <IonCol>
                              </IonCol>
                          </IonRow>
                      </IonCol> 
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
