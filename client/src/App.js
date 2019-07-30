import React from 'react';
// import CustomSidebar from './components/CustomSidebar';
import CardHolder from './components/CardHolder';
import 'semantic-ui-css/semantic.min.css';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar width="300px" />
      <div style={{
        top: "0",
        right: "0",
        marginLeft: "300px",
        padding: "20px"
      }}>
        <CardHolder />
      </div>
    </div>
  );
}

export default App;
