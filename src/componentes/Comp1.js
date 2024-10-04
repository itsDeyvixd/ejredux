import { useDispatch, useSelector } from "react-redux";
import { setInc } from "../reducers";
import { Link } from "react-router-dom";


function Comp1() {
    
    let estilos = {
        border: "5px solid"
    }

    const disp = useDispatch() ;
    const oInf = useSelector( state => state.holaAPP.info ) ;

    return(
        <>  
        <h2>Componente 1</h2>
            <div style={estilos}>
                <h1>nombre: {oInf.nombre} --- grado: {oInf.grado} --- edificio: {oInf.nomEdi} </h1>
                <button type="button" onClick={ () => {disp(setInc(1))} }>+1</button>
            </div>
            <div>
            <h3>boton</h3>   
            <Link to="/App"> ir a App</Link>

            </div>
        </>
    ) ;
}

export default Comp1 ;