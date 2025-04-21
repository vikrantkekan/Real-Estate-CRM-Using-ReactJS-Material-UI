import TablePagination from '@mui/material/TablePagination'
import {useState} from 'react'

function TablePage(){

const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };


  return (
    <TablePagination
      component="div"
      count={100}
      page={0}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelRowsPerPage="Rows per page"
      rowsPerPageOptions={[5,10,15,20,25,{label: 'All', value: -1}]}
    />
  );


}

export default TablePage;