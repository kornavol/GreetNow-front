export const CustomerStatusCssClasses = ["danger", "success", "info", ""];
export const CustomerStatusTitles = ["Suspended", "Active", "Pending", ""];
export const CustomerTypeCssClasses = ["success", "primary", ""];
export const CustomerTypeTitles = ["Business", "Individual", ""];
export const defaultSorted = [{
    dataField: 'id', // if dataField is not match to any column you defined, it will be ignored.
    order: 'asc' // desc or asc
  }];
export const sizePerPageList = [
  { text: "3", value: 3 },
  { text: "5", value: 5 },
  { text: "10", value: 10 }
];
export const initialFilter = {
  filter: {
    lastName: "",
    firstName: "",
    email: "",
    ipAddress: ""
  },
  sortOrder: "asc", // asc||desc
  sortField: "id",
  pageNumber: 1,
  pageSize: 10
};
