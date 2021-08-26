import React, { memo } from "react";
import Pagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core'

const Paginations = ({ active, setActive, totalPages }) => {


    return (
        <Box>
            <Pagination
                variant="outlined"
                color="secondary"
                count={totalPages}
                page={active}
                onChange={(e, value) => {
                    setActive(value)
                }}
            />

        </Box>
    );
};

export default memo(Paginations);
