import styled from "styled-components"
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav=styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
export const NavLink2 = styled(Link)`
    padding: 10px 22px;
    border-radius: 20px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100px;
    height: 50px;
`
export const NavLink = styled(Link)`
    padding: 10px 22px;
    border-radius: 20px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    fontSize: 50px
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor; pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-rights: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display:none
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`