import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
// import Search from '../pages/Search';
import Search2 from '../pages/Search2';

export default function Routes() {
  return (
    <Switch>
      <Route path="/trybetunes/search" exact component={ Search2 } />
      <Route path="/trybetunes/album/:id" component={ Album } />
      <Route path="/trybetunes/favorites" component={ Favorites } />
      <Route path="/trybetunes/profile" exact component={ Profile } />
      <Route path="/trybetunes/profile/edit" exact component={ ProfileEdit } />
      <Route path="/" exact component={ Home } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}
