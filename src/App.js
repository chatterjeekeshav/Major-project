import React from 'react'
import Header from './components/common/header/Header.jsx'
import "./App.css"
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom'
import Homepages from './components/home/Homepages.jsx'
import ImageSlider from './components/carousel/ImageSlider.jsx'
import images from './components/carousel/images.jsx'
const App = () => {
  return (
    <>
      <Router>
      <Header/>
      <ImageSlider images={images}/>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={Homepages} />
        </Switch>
    </Router>
    </>
  )
}

export default App