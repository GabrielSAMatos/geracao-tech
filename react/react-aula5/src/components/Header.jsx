import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #2215d4;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    & h1{
        color: red;
    }
    & nav ul{
        display: flex;
        gap: 35px;
        list-style: none;
        & li a{
            color: #00ffffb7;
            text-decoration: none;
            font-size: 18px;
            &:hover, &.active{
                color: white;
                transition: 0.5s;
            }
        }
    }
`;


const Header = () => {
    return ( 
        <HeaderContainer>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/Products"}>Products</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
     );
}
 
export default Header;