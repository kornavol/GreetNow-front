// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import * as uiHelpers from "../CustomersUIHelpers";
import * as columnFormatters from "./column-formatters";


export default function ContactsTable({entities}) {

    const DestopColumns = [
        {
            dataField: "id",
            text: "ID",
            sort: true,

        },
        {
            dataField: "firstName",
            text: "Firstname",
            sort: true,

        },
        {
            dataField: "lastName",
            text: "Lastname",
            sort: true,
   
        },
        {
            dataField: "dateOfBbirth",
            text: "Birthday",
            sort: true,

        },
        {
            dataField: "gender",
            text: "Gender",
            sort: false,
        },
        {
            dataField: "status",
            text: "Status",
            sort: true,

        },
        {
            dataField: "type",
            text: "Type",
            sort: true,

        },
        {
            dataField: "action",
            text: "Actions",
            formatter: columnFormatters.ActionsColumnFormatter,
            // formatExtraData: {
            //     openEditCustomerDialog: customersUIProps.openEditCustomerDialog,
            //     openDeleteCustomerDialog: customersUIProps.openDeleteCustomerDialog,
            // },
            classes: "text-right pr-0",
            headerClasses: "text-right pr-3",
            style: {
                minWidth: "100px",
            },
        },
    ];
    // Table pagination properties
    // const paginationOptions = {
    //   custom: true,
    //   totalSize: totalCount,
    //   sizePerPageList: uiHelpers.sizePerPageList,
    //   sizePerPage: customersUIProps.queryParams.pageSize,
    //   page: customersUIProps.queryParams.pageNumber,
    // };

    return (
        <div>

            <BootstrapTable
                wrapperClasses="table-responsive"  //Customize class on the outer element which wrap up the table element.
                bordered={false}
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                remote // not sure
                keyField="id"
                data={entities === null ? [] : entities}
                columns={DestopColumns}
                /* For some reason not working */
                // defaultSorted={uiHelpers.defaultSorted} 



            // onTableChange={getHandlerTableChange(
            //   customersUIProps.setQueryParams
            // )}
            // selectRow={getSelectRow({
            //   entities,
            //   ids: customersUIProps.ids,
            //   setIds: customersUIProps.setIds,
            // })}
            // {...paginationTableProps}
            >
                {/* <PleaseWaitMessage entities={entities} />
        <NoRecordsFoundMessage entities={entities} /> */}
            </BootstrapTable>

        </div>
    );
}
