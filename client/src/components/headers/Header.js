import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import axios from 'axios'



function Header() {
    const state = useContext(GlobalState)

    const [isLogged, setIsLogged] = state.userAPI.isLogged
    
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin

    const [cart] = state.userAPI.cart

    const [menu, setMenu] = useState(false)

    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><a href='/create_product'>Create Product</a></li>
                <li><a href='/category'>Categories</a></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><a href='/history'>History</a></li>
                <li><a href='/' onClick={logoutUser}>Logout</a></li>
            </>
        )
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className='menu'>
                <img src={Menu} alt="" width="30"/>
            </div>

            <div className='logo'>
                <h1>
                    <a href='/'>{isAdmin ? 'Admin' : 'Gottee'}</a>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><a href='/'>{isAdmin ? 'Products' : 'Shop'}</a></li>

                {isAdmin && adminRouter()} 
                {
                    isLogged ? loggedRouter() : <li><a href='/login'>Login or Register</a></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className='menu' />
                </li>
            </ul>

            {
                isAdmin ? ''
                :
                <div className='cart-icon'>
                    <span>{cart.length}</span>
                    <a href='/cart'>
                        <img src={Cart} alt="" width="30"/>
                    </a>
            </div>
            }
            
        </header>
    )
}

export default Header
