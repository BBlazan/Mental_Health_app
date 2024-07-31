// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ShareExperience from './components/ShareExperience';
import SupportGroups from './components/SupportGroups';
import Professionals from './components/Professionals';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/share" component={ShareExperience} />
        <Route path="/groups" component={SupportGroups} />
        <Route path="/professionals" component={Professionals} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
