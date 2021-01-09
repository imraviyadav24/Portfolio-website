import react from "react";
import './App.css';
import Header from "./components/Header"
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact"

const useStyles = makeStyles({})



function App() {
  const classes = useStyles();
  return (
    <div className="classes.container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skill" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
     
    </div>
  );
}

export default App;
