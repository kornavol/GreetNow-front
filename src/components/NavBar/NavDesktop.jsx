import './css/NavDesktop.css';
import { Button } from 'react-bootstrap';


import Nav from 'react-bootstrap/Nav'

import Login from '../Auth/Login';
import Register from '../Auth/Register';

export default function NavDesktop() {

    function login(){
        alert('Pop-up login form')
        return <Login/>
    }

    function register(){
        alert('Pop-up register form')
        return <Register/>
    }

    return (
        <>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/media-catalog">Catalog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/roulette">Card Roulette</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/card-editor">Card Editor</Nav.Link>
                </Nav.Item>
                <Button variant='light' onClick={login}>Login</Button>
                <Button variant='light' onClick={register}>Register</Button>
            </Nav>
            
        </>
    )
}
