import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pag1 from "./componentes/Pag1";
import Pag2 from "./componentes/Pag2";
import Pag3 from "./componentes/Pag3";
import PagNF from "./componentes/PagNF";
import PagBV from "./componentes/PagBV";
import Menu from "./componentes/Menu";
import Comp1 from "./componentes/Comp1";
import Comp2 from "./componentes/Comp2";
import App from "./App";

function Ppal() {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<PagBV />} />
                    <Route path="/P1" element={<Pag1 />} />
                    <Route path="/P2" element={<Pag2 />} />
                    <Route path="/P3" element={<Pag3 />} />
                    <Route path="/C1" element={<Comp1 />} />                    
                    <Route path="/C2" element={<Comp2 />} />
                    <Route path="/App" element={<App />} />
                    <Route path="*" element={<PagNF />} />
                </Routes>
            </BrowserRouter>

        </>
    );

} export default Ppal;