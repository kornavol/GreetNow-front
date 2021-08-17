import './css/ImgSelection.css';
import React, { useState, useRef } from 'react';
import ImgCatalog from '../Catalog/ImgCatalog';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';
/* React-Bootstrap Modal */
import Modal from 'react-bootstrap/Modal';
import{ Button} from '@material-ui/core';


const ImgSelection = (props) => {
    const ImgParent = useRef(0);

        /* Shows Modal */
    const [modalShow, setModalShow] = useState(false);

    function MyVerticallyCenteredModal(modalVertical) {

        return (
            <Modal {...modalVertical} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <ImgCatalog ref={ImgParent} setModalShow={setModalShow}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={modalVertical.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div>
            <h4 onClick={()=>setModalShow(true)}><ImageSearchOutlinedIcon/> Open Image Catalog</h4>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
            
        </div>
    );
}

export default ImgSelection;
