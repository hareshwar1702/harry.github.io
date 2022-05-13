import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import Home from './pages/Home';
import Login from './pages/login/login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import Dashboard from './pages/dashboard/dashboard';
import Menu from './components/menu/menu';
import User from './pages/user/user';
import './App.css';
import Device from './pages/device/device';
setupIonicReact();

const App: React.FC = () =>{
  // let isAuthed:boolean;
  // if(window.location.pathname == '/login'){
  //   isAuthed = true;
  // }else isAuthed = false;
return (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
      {window.location.pathname == '/login' ? '' :  <Menu  />}
        <IonRouterOutlet id="main">
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user" component={User} />
          <Route exact path="/device" component={Device} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);
}
export default App;
