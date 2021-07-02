import { Badge } from "react-bootstrap";

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
