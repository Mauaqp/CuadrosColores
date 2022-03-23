import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Display from "./Components/Display";

function App() {
  // States para las cajas desde NavBar
  const [boxDetails, setBoxDetails] = useState({
    color :"",
    size: "",
  });

  const [boxes, setBoxes] = useState([])

  return (
    <div className="App">
      <Navbar
        boxDetails={boxDetails}
        setBoxDetails={setBoxDetails}
        boxes={boxes}
        setBoxes={setBoxes}
      />

      {boxes.map(box => 
      <Display color={box.color} size={box.size}/>
      )}
    </div>
  );
}

export default App;
