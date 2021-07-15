import React from 'react';
import './css/Footer.css';
import { Nav } from 'react-bootstrap';

export default function FootNav() {
    return (
        <Nav id="nav-footer">
            <Nav.Item>
                <Nav.Link href="/qa">Q&A</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about-us">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact-us">Contacts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/impressum">Impressum</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
