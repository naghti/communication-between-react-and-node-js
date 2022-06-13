import React from 'react'
import {registration} from "./actions/user";

function App() {

  return (
    <div className="App">
      Hi
        <button onClick={() => {registration('могус')}}>button</button>
    </div>
  );
}

export default App;
