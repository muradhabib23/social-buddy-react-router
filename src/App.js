import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NoMatch from "./Components/NoMatch/NoMatch";
import PostDetail from "./Components/PostDetail/PostDetail";
import Header from "./Components/Header/Header";



function App() {
  
  return (
     <Router>
       <Switch>
         <Route path='/home'>
          <Header></Header>
          <Home></Home>
         </Route>
         <Route path='/posts/:postId'>
           <Header></Header>
           <PostDetail></PostDetail>
         </Route>
         <Route exact path='/'>
           <Header></Header>
           <Home></Home>
         </Route>
         <Route path='*'>
           <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
