import { useSelector } from "react-redux";
import Comp1 from "./components/Comp1";

function App() {
  let val = useSelector(state => state.cont);

  return (
    <>
      <h1>WENAS</h1>
      <h3>cont= {val}</h3>
      <Comp1 />
    </>
  );
}

export default App;
