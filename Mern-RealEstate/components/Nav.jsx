import { NavLink } from 'react-router-dom'

const Nav = () => {

    return(
        <nav>
            <ul>
                <li>
                <NavLink style={({ isActive }) => {
                    return isActive? {color: "black"} : {}
                }} to="/">Home</NavLink>
                </li>
                <li><NavLink style={({ isActive }) => {
                    return isActive? {color: "black"} : {}
                }} to="/properties">Properties</NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav