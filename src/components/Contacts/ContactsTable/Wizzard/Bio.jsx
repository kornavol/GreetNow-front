import React from 'react';

export default function Bio() {
    return (
        <div id="wizzard-bio" className='card=body p-0'>
            <div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
                <div className='col-xl-12 col-xxl-10'>
                    {/* Wizzard form */}
                    <form className="form fv-plugins-bootstrap fv-plugins-framework">
                        <div class="row justify-content-center">
                            <div class="col-xl-9">
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
                                                    title
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
                                                defaultValue
                                            />
                                            <div className="fv-plugins-message-container">
                                                <div
                                                    data-field="firstname"
                                                    data-validator="notEmpty"
                                                    className="fv-help-block"
                                                >
                                                    First Name is required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-danger">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Last Name</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <input
                                                className="form-control form-control-solid form-control-lg is-invalid"
                                                name="lastname"
                                                type="text"
                                                defaultValue
                                            />
                                            <div className="fv-plugins-message-container">
                                                <div
                                                    data-field="lastname"
                                                    data-validator="notEmpty"
                                                    className="fv-help-block"
                                                >
                                                    Last Name is required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-success">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Company Name</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <input
                                                className="form-control form-control-solid form-control-lg"
                                                name="companyname"
                                                type="text"
                                                defaultValue="Loop Inc."
                                            />
                                            <span className="form-text text-muted">
                                                If you want your invoices addressed to a company. Leave blank to use
                                                your full name.
                                            </span>
                                            <div className="fv-plugins-message-container" />
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-success">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Contact Phone</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <div className="input-group input-group-solid input-group-lg">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="la la-phone" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid form-control-lg"
                                                    name="phone"
                                                    defaultValue={5678967456}
                                                    placeholder="Phone"
                                                />
                                            </div>
                                            <span className="form-text text-muted">
                                                Enter valid US phone number(e.g: 5678967456).
                                            </span>
                                            <div className="fv-plugins-message-container" />
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-danger">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Email Address</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <div className="input-group input-group-solid input-group-lg">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="la la-at" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid form-control-lg is-invalid"
                                                    name="email"
                                                    defaultValue
                                                />
                                            </div>
                                            <div className="fv-plugins-message-container">
                                                <div
                                                    data-field="email"
                                                    data-validator="notEmpty"
                                                    className="fv-help-block"
                                                >
                                                    Email is required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end::Group*/}
                                    {/*begin::Group*/}
                                    <div className="form-group row fv-plugins-icon-container has-success">
                                        <label className="col-xl-3 col-lg-3 col-form-label">Company Site</label>
                                        <div className="col-lg-9 col-xl-9">
                                            <div className="input-group input-group-solid input-group-lg">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-solid form-control-lg"
                                                    name="companywebsite"
                                                    placeholder="Username"
                                                    defaultValue="loop"
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">.com</span>
                                                </div>
                                            </div>
                                            <div className="fv-plugins-message-container" />
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


