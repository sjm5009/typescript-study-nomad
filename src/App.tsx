import React from 'react';
import './App.css';
import CallSignatureApply from './typescriptEx/section3/callSignature/CallSignatureApply';
import OverloadingApply from './typescriptEx/section3/overloading/OverloadingApply';
import PolymorphismApply from './typescriptEx/section3/polymorphism/PolymorphismApply';

function App() {
  return (
    <div className="App">
      {/* <CallSignatureApply/> */}
      {/* <OverloadingApply/> */}
      <PolymorphismApply/>
    </div>
  );
}

export default App;
