import React from 'react';

export default function Bio({form, setForm}) {

    function fillForm(e, field) {
        const newForm = { ...form }
        newForm[field] = e.target.value
        setForm(newForm)
    }

    return (
        <div id="wizzard-bio" className='card=body p-0'>
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
                                    <h5 className="text-dark font-weight-bold mb-10">User's Profile Details:</h5>
                                    {/*begin::Group*/}
                                    <div className="form-group row">
                                        <label className="col-xl-3 col-lg-3 col-form-label text-left">Avatar</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <div className="image-input image-input-outline" id="kt_user_add_avatar">
                                                <div
                                                    className="image-input-wrapper"
                                                    style={{ backgroundImage: "url(assets/media/users/100_6.jpg)" }}
                                                />
                                                <label
                                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                    data-action="change"
                                                    data-toggle="tooltip"
                                                    data-original-title="Change avatar"
                                                >
                                                    <i className="fa fa-pen icon-sm text-muted" />
                                                    <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="profile_avatar_remove" />
                                                </label>
                                                <span
                                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                    data-action="cancel"
                                                    data-toggle="tooltip"
                                                    data-original-title="Cancel avatar"
                                                >
                                                    <i className="ki ki-bold-close icon-xs text-muted" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-danger">
                                        <label className="col-xl-3 col-lg-3 col-form-label">First Name</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <input
                                                className="form-control form-control-solid form-control-lg is-invalid"
                                                name="firstname"
                                                type="text"
                                                value={form.firstName}
                                                onChange={(e) => fillForm(e, 'firstName')}
                                            />
                                            {/*   <div className="fv-plugins-message-container">
                                                <div
                                                    data-field="firstname"
                                                    data-validator="notEmpty"
                                                    className="fv-help-block"
                                                >
                                                    First Name is required
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-danger">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Last Name</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <input
                                                className="form-control form-control-solid form-control-lg is-invalid"
                                                name="lastName"
                                                type="text"
                                                value={form.lastName}
                                                onChange={(e) => fillForm(e, 'lastName')}
                                            />
                                            {/*     <div className="fv-plugins-message-container">
                                                <div
                                                    data-field="lastname"
                                                    data-validator="notEmpty"
                                                    className="fv-help-block"
                                                >
                                                    Last Name is required
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-success">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Birthday</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <input
                                                className="form-control form-control-solid form-control-lg"
                                                name="dateOfBbirth"
                                                type="date"
                                                onChange={(e) => fillForm(e, 'dateOfBbirth')}
                                            />
                                            {/* <span className="form-text text-muted">
                                                If you want your invoices addressed to a company. Leave blank to use
                                                your full name.
                                            </span> */}
                                            <div className="fv-plugins-message-container" />
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-success">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Gender</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <select
                                                className="form-control form-control-lg form-control-solid"
                                                name="language"
                                                onChange={(e) => fillForm(e, 'gender')}
                                            >
                                                <option value="">Select Language...</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                             
                                            </select>

                                            {/*                                             <span className="form-text text-muted">
                                                Enter valid US phone number(e.g: 5678967456).
                                            </span>
                                            <div className="fv-plugins-message-container" /> */}
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


