import { useDispatch } from "react-redux";
import { setDec,setInc } from "../action";

function Comp1() {
    let disp = useDispatch();

    let estilos = {
        border: "1px solid",
    };

    return (
        <>
            <div style={estilos}>
                <button
                    type="button"
                    onClick={() => {
                        disp(setInc(2));
                    }}
                >
                    +
                </button>

                <button type="button"
                    onClick={() => {
                        disp(setDec(2));
                    }}
                >
                    -
                    </button>
            </div>
        </>
    );
}

export default Comp1;
