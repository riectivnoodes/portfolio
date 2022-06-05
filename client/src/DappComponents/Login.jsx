import React, { Component } from 'react'
import { Fragment } from 'react'
import { Link, Navigate, Route, useNavigate} from 'react-router-dom';
import ConnectButton from '../MainEntryComponents/ConnectButton'
import DisconnectButton from '../MainEntryComponents/DisconnectButton';
import './Login.css'
import Messenger from './Messenger';
import HandleLogin from './HandleLogin'


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <Fragment>
                <header className='Login-Header'>
                    <ConnectButton />
                    <DisconnectButton/>
                    </header>
                <div className='Login-Main'>
                    <HandleLogin/>
                </div>
            </Fragment>
        );
    }
}
