
import { useDispatch, useSelector } from "react-redux";
import Comp1 from "./componentes/Comp1";
import { setINFO } from "./reducers";


function App() {

  const val  = useSelector( state => state.holaAPP.cont ) ;
  const disp = useDispatch() ;

  return (
    <>

      <h1>Hola</h1>
      <h3>Cont en App:{val}</h3>

      <button type="button" onClick={ () => {disp( setINFO({name:"INES",grade:"11-A",salon:"108"}) )} }>INFO</button>

      <Comp1/>
    </>
  );
}

export default App;
