import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/actions';


function Header() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    function logOutUser() {
        dispatch(logOut());
    }

    const notLogged = (
        <button type="button" className="btn btn-primary" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#myModal">
            Sign in
        </button>
    )
    const logged = (
        <div>
            <span>{user.username}</span>
            <button type="button" className="btn btn-primary" onClick={logOutUser}>Sign out</button>
        </div>
    )


    return (
        <div className="myNavbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Homepage</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/task">Task</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {user.username ? logged : notLogged}
                </div>
            </nav>
        </div>
    )
}

export default Header;