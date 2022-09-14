//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import Page404 from './container/404';
import Home from './container/Home';
import About from './container/About';
import Services from './container/Services';
import Portfolio from './container/Portfolio';
import Pricing from './container/Pricing';
import Blog from './container/Blog';
import Contact from './container/Contact';
import Hero from './container/Hero';
import Footer from './components/ui/Footer';

import Header from './components/ui/Header';
import './assets/css/page.css';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/home">
              <Hero />
            </Route>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route path='*'>
              <Page404 />
            </Route>
          </Switch>
          <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
