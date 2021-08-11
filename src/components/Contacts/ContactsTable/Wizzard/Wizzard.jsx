import '../../assets/css/wizzard.css'
import { Tabs, Tab } from "react-bootstrap";

import React, { useState } from "react";

import Bio from './Bio';


export default function Wizzard({ unmPopUp }) {

    const [key, setKey] = useState("bio");
    console.log(unmPopUp);

    return (
        <div
            className="modal text-center show"
            role="dialog"
            tabIndex={-1}
            aria-model="true"
            style={{ display: 'block', backgroundColor: '#cacaca' }}
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div id="contacts-wizzard">
                            <Tabs id="wizzard-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                                <Tab eventKey="bio" title="bio">
                                    <Bio/>
                                </Tab>
                                <Tab eventKey="events" title="events">
                                    <div>evens</div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={unmPopUp}
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" >Save changes</button>
                    </div>
                </div>
            </div>
        </div>















    );
}

