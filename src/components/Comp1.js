import { useDispatch, useSelector} from "react-redux";
import { setDec,setInc } from "../action";

function Comp1() {
    let disp = useDispatch();

    let val = useSelector( state => state.cont );
    let estilos = {
        border: "1px solid",
    };

    return (
        <>
            <div style={estilos}>
                <h1>Componente 1 :{val}</h1>
                <button
                    type="button"
                    onClick={() => {
                        disp(setInc(2));
                    }}
                >
                    +2
                </button>

                <button type="button"
                    onClick={() => {
                        disp(setDec(2));
                    }}
                >
                    -2
                    </button>
            </div>
        </>
    );
}

export default Comp1;
