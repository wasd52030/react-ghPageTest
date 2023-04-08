import React from 'react'
import { Route, Switch } from "react-router-dom"
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import Layout from './components/layout/Layout'


function App() {

  const root='react-ghPageTest'

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path={`/${root}/`} exact>
            <AllMeetupsPage />
          </Route>
          <Route path={`/${root}/new-meetup`} >
            <NewMeetupPage />
          </Route>
          <Route path={`/${root}/favorites`} >
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
