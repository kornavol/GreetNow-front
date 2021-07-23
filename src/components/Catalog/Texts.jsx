import { ListGroup } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { sendText } from '../../actions';

const Texts = ({ texts }) => {
    
    const dispatch = useDispatch();
    
    function dispatchToRedux(text) {
        // console.log('dispatch-text', text);
        dispatch(sendText(text))
    }


    // console.log("texts", texts);
    const textSet = texts.map((text) => (
        <ListGroup.Item
            key={text._id}
            id={text._id}
            onClick={() => { dispatchToRedux(text) }}
            style={{ cursor: 'pointer' }}
        >
            {text.text}
        </ListGroup.Item>
    ));

    return <ListGroup>{textSet}</ListGroup>;
};

export default Texts;
