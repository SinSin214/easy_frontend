import React from 'react';
import './Register.scss';
import { useState } from 'react';
import axios from 'axios'


function Register(props) {
    const [modalType, setModalType] = useState(0);
    const define = ['SIGN IN', 'FORGET PASSWORD', 'CREATE ACCOUNT'];
    const [modalData, setModalData] = useState({
        username: '',
        password: '',
        email: ''
    });

    function changeState(param) {
        setModalType(param);
    }

    const emailInput = modalType === 0 ? '' : (<div className="form-group">
        <input type="email" className="form-control" value={modalData.email} placeholder="Email" onChange={handleOnChange} required />
    </div>)

    let title = define[modalType];

    function handleOnChange(e) {
        e.preventDefault();
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
        if (modalType === 0) {
            async function callAPI() {
                await axios.post('/login').then(res => {
                });
            }
        } else if (modalType === 1) {
            async function callAPI() {
                await axios.post('/forget-password').then(res => {
                });
            }
        } else if (modalType === 2) {
            async function callAPI() {
                await axios.post('/create-account').then(res => {
                });
            }
        } else { return 'Error' }

    }

    return (
        <div className="register">
            <div id="myModal" className="modal fade">
                <div className="modal-dialog modal-login">
                    <form onSubmit={onSubmitModal}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{title}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={() => changeState(0)}>×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" value={modalData.username} placeholder="Username" onChange={handleOnChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" value={modalData.password} placeholder="Password" onChange={handleOnChange} />
                                </div>
                                {emailInput}
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block btn-lg" type="submit">Accept</button>
                                </div>
                                <div className="signup">
                                    <button className="forget" onClick={() => changeState(1)}>
                                        Forget password?</button>
                                    <button className="forget" onClick={() => changeState(2)}>
                                        Create account?</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;