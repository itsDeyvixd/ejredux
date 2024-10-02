import { useSelector, useDispatch } from "react-redux";
import Comp1 from "./components/Comp1";
import { setDec } from "./action";

function App() {
  let val = useSelector(state => state.cont);

  let disp = useDispatch();

  return (
    <>
      <h1>WENAS</h1>
      <h3>cont= {val}</h3>

      <button type="button"
                    onClick={() => {
                        disp(setDec(5));
                    }}
                >
                    -5
                    </button>
      <Comp1 />
    </>
  );
}

export default App;
