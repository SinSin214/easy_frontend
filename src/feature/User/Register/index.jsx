import React from 'react';
import './Register.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../../redux/actions/actions';

function Register() {
    const dispatch = useDispatch();
    const process = useSelector(state => state.process);
    const [modalType, setModalType] = useState(0);
    const define = ['SIGN IN', 'FORGET PASSWORD', 'CREATE ACCOUNT'];
    const [modalData, setModalData] = useState({
        username: '',
        password: '',
        email: ''
    });
    let errorMessage = process.error == true ? (<div class="error-message">The information is no correct</div>) : '';

    function changeState(param) {
        setModalType(param);
    }

    const emailInput = modalType === 0 ? '' : (<div className="form-group">
        <input type="email" className="form-control" value={modalData.email} name="email" placeholder="Email" onChange={onHandleChange} required />
    </div>)

    let title = define[modalType];

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
                        window.location.reload();
                    })
                break;

            default: return 'Error';
        }
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
                                    <input type="text" className="form-control" name="username" placeholder="Username" value={modalData.username} onChange={onHandleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" value={modalData.password} onChange={onHandleChange} />
                                </div>
                                {emailInput}
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block btn-lg" type="submit">Accept</button>
                                </div>
                                {errorMessage}
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