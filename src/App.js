import React from "react";
import Wrapper from "./compenents/Wrapper";
import Main from "./compenents/Main"
import Header from "./compenents/Header";
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
