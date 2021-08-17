import './css/TextSelection.css';
import React, { useState } from 'react';
import TextsCatalog from '../Catalog/TextsCatalog';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
/* React-Bootstrap Modal */
import Modal from 'react-bootstrap/Modal';
import{ Button} from '@material-ui/core';

const TextSelection = () => {
/* Shows Modal */
    const [modalShow, setModalShow] = useState(false);

    function MyVerticallyCenteredModal(modalVertical) {

        return (
            <Modal {...modalVertical} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <TextsCatalog setModalShow={setModalShow}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={modalVertical.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <div>
            <h4 onClick={()=>setModalShow(true)}><LibraryBooksOutlinedIcon/> Open Text Catalog</h4>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    );
}

export default TextSelection
