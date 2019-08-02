import React from 'react';
import CardHolder from './components/CardHolder';
import 'semantic-ui-css/semantic.min.css';
import MenuBar from './components/MenuBar';
import BackGround from './components/BackGround';
import Header from './components/Header';


function App() {
  const s1Height = 1000;
  const s2Height = 1700;
  const s3Height = 1000;
  return (
    <div className="App">
      <MenuBar />
      <Header />
      <BackGround s1Height={s1Height} s2Height={s2Height} s3Height={s3Height} />
      <div style={{ top: String(s1Height + 100) + "px", position: "absolute", margin: "auto", textAlign: "center" }}>
        <div style={{ width: "95%", margin: "auto" }}>
          <CardHolder />
        </div>

      </div>

      {/* </div> */}
    </div>
  );
}

export default App;
