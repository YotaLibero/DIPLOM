import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './font-awesome-min.css';
import './font-awesome.css';
import './App.css';
// import './pages/create.css';
import {MainWin} from "./pages/MainWin";
import CreateWin from "./pages/CreateWin";
import {MainMenu} from "./components/MainMenu";
import {OpenWin} from "./pages/OpenWin";
import {EditWin} from "./pages/EditWin";
import {GraphicsWin} from "./pages/GraphicsWin";
import {TablesWin} from "./pages/TablesWin";
// import React from "@types/react";

function App() {
  // const mainmenu = "mainmenu";
  return (
      <BrowserRouter>
          <MainMenu/>
          <div id="right-container">
              <Switch>
                  <Route path={"/"} exact component={MainWin}/>
                  <Route path={"/create"} exact component={CreateWin}/>
                  <Route path={"/open"} exact component={OpenWin}/>
                  <Route path={"/edit"} exact component={EditWin}/>
                  <Route path={"/graphics"} exact component={GraphicsWin}/>
                  <Route path={"/tables"} exact component={TablesWin}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;