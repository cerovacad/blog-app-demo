import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import AddNewPage from '../components/AddNewPage';


class AppRouter extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/new" component={AddNewPage} exact/>
		        <Route component={NotFoundPage} />
      		</Switch>
    	</div>
      </Router>
    );
  }
}

export default AppRouter;
