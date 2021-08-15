import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

export default function Events({form, setForm}) {

    function fillForm(e, field) {
        const newForm = { ...form }
        const name = e.target.value
        const arr = newForm[field]
        if (e.target.checked) {
            arr.push(name)
        } else {
            
            const index = arr.indexOf(name);
            if (index > -1) {
                console.log('if');
                arr.splice(index, 1);
            }
        }
        console.log('arr', arr);
        console.log('newForm', newForm);
        setForm(newForm)
    }

    console.log(form);


    const eventsList = ['Birthday', 'New Year', 'Christmas']
    /*TO=DO: import events and categories from backend over request */
    const events = eventsList.map((event) => {
        const value = event.toLowerCase()
        return (
            <label className="checkbox">
                <input
                    name={event}
                    value={value}
                    type="checkbox"
                    // onChange={(e)=>console.log(e.target.checked)} 
                    onChange={(e) => fillForm(e,'events')}
                />
                <span />
                {event}
                </label>
        )
    })


    return (
        <div id="wizzard-events" className='card=body p-0'>
            <div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
                <div className='col-xl-12 col-xxl-10'>
                    {/* Wizzard form */}
                    <form className="form fv-plugins-bootstrap fv-plugins-framework">
                        <div className="row justify-content-center">
                            <div className="col-xl-9">
                                {/* Wizzard. Step -1 */}
                                <div
                                    className="my-5 step"
                                >
                                    <h5 className="text-dark font-weight-bold mb-10">Recipient's Events & Relationships</h5>
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-success">
                                        <label className="col-form-label col-xl-3 col-lg-3">Events</label>
                                        <div className="col-xl-9 col-lg-9 col-form-label">
                                            <div className="checkbox-inline">
                                                {events}
                                            </div>
                                            <div className="fv-plugins-message-container" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}


