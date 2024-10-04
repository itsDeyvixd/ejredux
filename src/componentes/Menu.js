import { NavLink } from "react-router-dom";
import '../App.css' ;


function Menu() {

    return(
        <><div>
            <nav>
                <NavLink className={ ({isActive}) => ( isActive ? "activo" : null) } to='/C1'>Comp1</NavLink>
                <NavLink className={ ({isActive}) => ( isActive ? "activo" : null) } to='/C2'>Comp2</NavLink>
                <NavLink className={ ({isActive}) => ( isActive ? "activo" : null) } to='/P1'>Pag1  </NavLink>
                <NavLink className={ ({isActive}) => ( isActive ? "activo" : null) } to='/P2'>Pag2  </NavLink>
                <NavLink className={ ({isActive}) => ( isActive ? "activo" : null) } to='/P3'>Pag3  </NavLink>
            </nav>
        </div>
            
        </>
    ) ;
}

export default Menu ;