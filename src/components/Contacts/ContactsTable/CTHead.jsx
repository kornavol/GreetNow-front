import React from 'react';

export default function CTHead() {
    return (

        <thead className="datatable-head">
            <tr className="datatable-row" style={{ left: 0 }}>
                {/* <th className="datatable-cell datatable-toggle-detail">
                    <span />
                </th> */}

                <th data-field="CheckBox" className="form-check">
                    <input
                        className="form-check-input mt-4"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                    />
                </th>
                <th
                    data-field="RecordID"
                    className="datatable-cell-left datatable-cell datatable-cell-sort datatable-cell-sorted"
                    data-sort="asc"
                >
                    <span style={{ width: 40 }}>
                        #<i className="flaticon2-arrow-up" />
                    </span>
                </th>
                <th data-field="OrderID" className="datatable-cell datatable-cell-sort">
                    <span style={{ width: 250 }}>Recipient</span>
                </th>
                <th data-field="Birthday" className="datatable-cell datatable-cell-sort">
                    <span style={{ width: 108 }}>Birthday</span>
                </th>
                <th data-field="Gender" className="datatable-cell datatable-cell-sort">
                    <span style={{ width: 108 }}>Gender</span>
                </th>

                <th data-field="Relationship" className="datatable-cell datatable-cell-sort">
                    <span style={{ width: 108 }}>Relationship</span>
                </th>
                <th data-field="Events" className="datatable-cell datatable-cell-sort">
                    <span style={{ width: 108 }}>Events</span>
                </th>
                <th
                    data-field="Actions"
                    data-autohide-disabled="false"
                    className="datatable-cell datatable-cell-sort"
                >
                    <span style={{ width: 130 }}>Actions</span>
                </th>
            </tr>
        </thead>
    );
}