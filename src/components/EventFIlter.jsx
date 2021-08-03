import React from 'react';
import { Badge } from "react-bootstrap";

/* This filter is using for Roulette component */

const EventFIlter = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Badge variant="primary">Birhday</Badge>{' '}
            <Badge variant="secondary">Weding</Badge>{' '}
            <Badge variant="success">Christmas</Badge>{' '}
            <Badge variant="danger">New Year</Badge>{' '}
        </div>
    );
}

export default EventFIlter;
