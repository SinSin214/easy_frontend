import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.scss';
import * as action from '../../redux/actions/actions';
import { useHistory } from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const history = useHistory()
    // const process = useSelector(state => state.process);
    const [modalType, setModalType] = useState(0);
    const define = ['SIGN IN', 'SIGN UP', 'FORGET'];
    const [modalData, setModalData] = useState({
        username: '',
        password: '',
        email: ''
    });

    function changeModal(param) {
        setModalType(param);
    }

    function onHandleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        let temp = {
            ...modalData,
            [name]: value
        }
        setModalData(temp);
    }

    function onSubmitModal(e) {
        e.preventDefault();
        switch (modalType) {
            case 0:
                dispatch(action.login(modalData))
                    .then(() => {
                        history.push('/')
                    }, (err) => {
                        alert('Lỗi')
                    })
                break;
            case 1:
                dispatch(action.createAccount(modalData))
                    .then(() => {
                        alert('Register success, please check email for verifying account');
                        window.location.reload();
                    }, (err) => {
                        alert(err);
                    })
                break;

            default: return 'Error';
        }
    }
    return (
        <div className="main">
            <div className="container">
                <center>
                    <div className="middle">
                        <div id="login">
                            <form>
                                <div className="field-input">
                                    {modalType !== 2 ? <div><span className="fa fa-user"></span>
                                        <input type="text" name="username" placeholder="Username" value={modalData.username} onChange={onHandleChange} required />
                                    </div> : ''}
                                    {modalType !== 2 ? <div><span className="fa fa-lock"></span>
                                        <input type="password" name="password" placeholder="Password" value={modalData.password} onChange={onHandleChange} required />
                                    </div> : ''}
                                    {modalType !== 0 ? <div><span className="fa fa-envelope"></span>
                                        <input type="email" name="email" placeholder="Email" value={modalData.email} onChange={onHandleChange} required />
                                    </div> : ''}
                                </div>
                                <div className="forget-password dropdown">
                                    <div className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                        {define[modalType]}</div>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item" onClick={() => changeModal(0)}>Sign in</div>
                                        <div className="dropdown-item" onClick={() => changeModal(1)}>Sign up</div>
                                        <div className="dropdown-item" onClick={() => changeModal(2)}>Forget password</div>
                                    </div>
                                    <button className="btn btn-light login-button" onClick={onSubmitModal}>NEXT</button>
                                </div>
                            </form>
                        </div>
                        <div className="logo">LOGO
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Login;