import React from "react";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main"
import Header from "./components/Header";
// import Main from "./compenents/Main";

function App() {
  return (
    <div className="ui container">
      <Wrapper>
        <Header className='ui segment'/>
        <Main />
      </Wrapper>
    </div>
  );
};

export default App;
