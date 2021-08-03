import { ListGroup } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { sendText } from "../../actions";

const Texts = ({ texts }) => {
    const dispatch = useDispatch();

    const textSet = texts.map((text) => (
        <ListGroup.Item
            key={text._id}
            id={text._id}
            onClick={() => dispatch(sendText(text))}
            style={{ cursor: "pointer" }}
        >
            {text.text}
        </ListGroup.Item>
    ));

    return <ListGroup>{textSet}</ListGroup>;
};

export default Texts;
