import './css/FrontPage.css';
import { useSelector, useDispatch } from 'react-redux';

const FrontPage = () => {

    const dispatch = useDispatch();
    const selectedImage = useSelector((state) => state.imgUrl);

    return (
        <div id="card-front" style={{backgroundImage: `url(${selectedImage})`}}>
            <h4>Select an image from the catalog</h4>
        </div>
    );
}

export default FrontPage;
