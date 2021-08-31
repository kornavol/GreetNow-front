import React from "react";
import { useDispatch } from "react-redux";
import NotificationBtn from "./components/notificationBtn";

import { editContact } from "../../../actions/contatcInf";
import { getAllContacts, deleteContact } from "../../../actions/contactsCRUD";

export default function CTRow({ contact, number, setSwitchCase }) {
  const dispatch = useDispatch();
  /* Why I can't devine over let */
  let {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    relationships,
    events,
    newCards,
  } = contact;
  const fullName = lastName + " " + firstName;

  /* Conevert date  */
  if (dateOfBirth) {
    const day = dateOfBirth.substr(8, 2);
    const month = dateOfBirth.substr(5, 2);
    const year = dateOfBirth.substr(0, 4);

    /* saving date in DD-MM-YYYY format */
    dateOfBirth = day + "-" + month + "-" + year;
  }

  const initials =
    firstName.substr(0, 1).toUpperCase() + lastName.substr(0, 1).toUpperCase();

  const relatList = relationships.map((category) => {
    if (category) {
      return (
        <div
          key={category}
          className="label label-lg font-weight-bold  label-light-info label-inline m-1"
        >
          {category}
        </div>
      );
    }
  });

  const eventsList = events.map((event) => {
    if (event) {
      return (
        <div
          key={event}
          className="label label-lg font-weight-bold  label-light-danger label-inline m-1"
        >
          {event}
        </div>
      );
    }
  });

  return (
    <tr
      key={number}
      data-row={number}
      className="datatable-row"
      style={{ left: 0 }}
    >
      {/* <td className="datatable-cell datatable-toggle-detail">
                <a className="datatable-toggle-detail" href>
                    <i className="fa fa-caret-right" />
                </a>
            </td> */}

      <td data-field="CheckBox" className="datatable-cell">
        <div className="form-check">
          <input
            className=" form-check-input"
            type="checkbox"
            defaultValue
            id="flexCheckDefault"
          />
        </div>
      </td>

      <td
        className="datatable-cell-sorted datatable-cell-left datatable-cell"
        data-field="RecordID"
        aria-label={number}
      >
        <span style={{ width: 40 }}>
          <span className="font-weight-bolder">{number}</span>
        </span>
      </td>

      <td
        data-field="OrderID"
        aria-label="64616-103"
        className="datatable-cell"
      >
        <span style={{ width: 250 }}>
          <div className="d-flex align-items-center">
            <div className="symbol symbol-40 symbol-light-warning flex-shrink-0">
              <span className="symbol-label font-size-h4 font-weight-bold">
                {initials}
              </span>
            </div>
            <div className="ml-4">
              <div className="text-dark-75 font-weight-light font-size-sm mb-0">
                {fullName}
              </div>
              {/* <a
                                href="#"
                                className="text-muted font-weight-bold text-hover-primary"
                            >
                                hboule0@hp.com
                            </a> */}
            </div>
          </div>
        </span>
      </td>

      <td
        data-field="Birthday"
        aria-label={dateOfBirth}
        className="datatable-cell"
      >
        <span style={{ width: 108 }}>
          <div className="font-weight-bolder text-primary mb-0">
            {dateOfBirth}
          </div>
          {/* <div className="text-muted">Rejected</div> */}
        </span>
      </td>

      <td data-field="Gender" aria-label={gender} className="datatable-cell">
        <span style={{ width: 108 }}>
          <div className="font-weight-bold text-muted">{gender}</div>
          {/* <div className="font-weight-bold text-muted">Code: BR</div> */}
        </span>
      </td>

      <td data-field="Relationship" aria-label="" className="datatable-cell">
        <span style={{ width: 108 }}>{relatList}</span>
      </td>

      <td data-field="Events" aria-label="" className="datatable-cell">
        <span style={{ width: 108 }}>{eventsList}</span>
      </td>

      <td data-field="notification" aria-label="" className="datatable-cell">
        <span style={{ width: 70 }}>
          <NotificationBtn
            content={newCards}
            link={"my-cards"}
            contact={contact}
          />
        </span>
      </td>

      <td
        data-field="Actions"
        data-autohide-disabled="false"
        aria-label="null"
        className="datatable-cell"
      >
        <span style={{ overflow: "visible", position: "relative", width: 130 }}>
          <button
            className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
            title="Edit details"
            // onClick={dispatch(updateContact(contact))}
            onClick={() => {
              setSwitchCase("edit_contact");
              dispatch(editContact(contact));
            }}
          >
            <span className="svg-icon svg-icon-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <path
                    d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                    fill="#000000"
                    fillRule="nonzero"
                    transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                  />
                  <path
                    d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                    fill="#000000"
                    fillRule="nonzero"
                    opacity="0.3"
                  />
                </g>
              </svg>
            </span>
          </button>
          <button
            className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon"
            title="Delete"
            onClick={async () => {
              const result = await dispatch(deleteContact(contact));
              if (result.status == "success") {
                dispatch(getAllContacts());
              }
            }}
          >
            <span className="svg-icon svg-icon-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <path
                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                    fill="#000000"
                    fillRule="nonzero"
                  />
                  <path
                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                    fill="#000000"
                    opacity="0.3"
                  />
                </g>
              </svg>
            </span>
          </button>
        </span>
      </td>
    </tr>
  );
}
