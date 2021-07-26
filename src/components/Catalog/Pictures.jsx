import { ListGroup } from "react-bootstrap";

import { useDispatch } from "react-redux";
// import { sendText } from '../../actions';

const Pictures = ({ pictures }) => {

    // const dispatch = useDispatch();

    // function dispatchToRedux(text) {
    //     // console.log('dispatch-text', text);
    //     dispatch(sendText(text))
    // }

    const picSet = pictures.map((picture) => {
        const pass = `http://localhost:8080/greeting-pictures/${picture.name}`
        return (
            <img
                key={picture._id}
                id={picture._id}
                className="picture"
                src={pass}
            />
        )
    });

    return (
        <div>{picSet}</div>
    );
};

export default Pictures;
