import { ListGroup } from "react-bootstrap";


const Texts = ({texts}) => {
    console.log('textssss',texts);
    const textSet = texts.map(text => <ListGroup.Item key={text.id}>{text.title}</ListGroup.Item>)


    return (
        <ListGroup>
            {textSet}
        </ListGroup>
    );
}

export default Texts;
