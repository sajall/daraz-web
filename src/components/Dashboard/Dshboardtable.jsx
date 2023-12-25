import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Box,
  TablePagination,
  Pagination,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Avatar,
  Typography,
  Paper,
  TableCell,
} from "@mui/material";
// icons
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// local imports
import {
  MainBox,
  StyledBTableCell,
  TopBox,
  TopBox1,
  TopTypo,
  TopTypo1,
  StyledTableCell
} from "./Styled-component";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
// import  './Users.css'

export default function DashboardTable({products, setProducts ,
    addPopup,
    setAddPopup,

}) {

  const getProducts = async () => {
    // setLoading(true)
    const response = await axios.get(`/products`);
    if (response.status == 200) {
        console.log(response.data , ' this is dashborad');
      // setLoading(false);
      setProducts(response?.data);
    } else {
      toast.error("error fetching products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);




  let user =  useSelector((store)=>{
    return store.UsersSection.userLoggedin
   });

  const theme = 'light'

  // search query
  const [isSearch, setIsSearch] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredArray = products?.filter((report) =>
    searchQuery
      .toLowerCase()
      .split(" ")
      .every((term) => {
        return report?.email?.toLowerCase().includes(term);
      })
  );

  // Common state for pagination
  const [page, setPage] = useState(1);
  const handleChangePagination = (event, value) => {
    setPage(value);
    setTablePage(value);
  };

  // Table pagination state
  const [tablePage, setTablePage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setTablePage(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setTablePage(1);
    setPage(1);
  };
  return (
    <div>
      <MainBox>
        <Container>
          <TopBox>
            <TopBox1>
              <TopTypo>products</TopTypo>
              <TopTypo1>Total {products?.length} products</TopTypo1>
            </TopBox1>

            <Box>
              {/* <MultiDatePicker
                datePopup={datePopup}
                
                setDatePopup={setDatePopup}
              /> */}
            </Box>
            <Box height="40px">
              {isSearch ? (
                <Box
                  sx={{
                    display: "flex",
                    color: "#526484",
                    height: "50px",
                  }}
                >
                  <Button
                    onClick={() => setIsSearch(!isSearch)}
                    sx={{ color: theme === "light" ? "#526484" : "#fff" }}
                  >
                    <SearchIcon />
                  </Button>
                  <Button
                    onClick={() => toast.info("In Progress!")}
                    sx={{ color: theme === "light" ? "#526484" : "#fff" }}
                  >
                    <MenuIcon />
                  </Button>
                </Box>
              ) : (
                <Box
                  display="flex"
                  justifyContent="end"
                  alignItems="center"
                  gap={1}
                >
                  {/* <div className={styles.searchInput}> */}
                    <input
                    //   className={styles.input}
                      placeholder="Search any Account"
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      name=""
                      id=""
                    />
                    {/* <AiOutlineSearch className={styles.icon} /> */}
                  {/* </div> */}
                  <Button
                    onClick={() => setIsSearch(!isSearch)}
                    sx={{ color: theme === "light" ? "#526484" : "#fff" }}
                  >
                    <CloseIcon />
                  </Button>
                </Box>
              )}
            </Box>
          </TopBox>
      

        <TableContainer
          component={Paper}
          style={{
            backgroundColor: "var(--color-form-bg1)",
            maxHeight: "500px",
            overflowY: "auto",
          }}
        >
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                backgroundColor: "var(--color-form-bg1)",
              }}
            >
              <TableRow>
                {/* <StyledTableCell theme={theme}>Name</StyledTableCell> */}
                <StyledTableCell theme={theme} align="right">
                image
                </StyledTableCell>
                <StyledTableCell theme={theme} align="right">
                 Category
                </StyledTableCell>
                <StyledTableCell theme={theme} align="right">
                  Price
                </StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Display the rows based on the current pagination state */}
{/* ======================================================================================================== */}
  

              {  products?.reverse().filter((product)=>product?.userId == user?._id)
                ?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((row, index) => {
                 const {category ,price , src} = row
                  return (
                    <>
                      <TableRow
                      key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {/* <StyledBTableCell> */}
                          {/* <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Avatar sx={{ background: "#e2fbf4", mr: "5px" }}>
                              <CategoryIcon sx={{ color: "#1ee0ac" }} />
                            </Avatar>
                            <Box>
                              <Typography
                                sx={{
                                  color: theme == "light" ? "#364a63" : "#fff",
                                  fontSize: "14px",
                                }}
                              >
                               name
                              </Typography>
                              <Typography
                                sx={{
                                  color: "#8094ae",
                                  fontSize: "12px",
                                }}
                              >
                               code
                              </Typography>
                            </Box>
                          </Box>  */}
                        {/* </StyledBTableCell> */}
                        <StyledBTableCell align="right">
                         <img id="product-image" style={{width:"150px", height:"150px"}} src={src} alt="" /> 
                        </StyledBTableCell>
                        <StyledBTableCell align="right">
                          {category}
                        </StyledBTableCell>
                        <StyledBTableCell align="right">
                          {price}
                        </StyledBTableCell>
                        <TableCell align="right" sx={{ color: "#526484" }}>
                    <Button
                      onClick={() => {
                        setAddPopup({
                          isOpen: true,
                          id: row._id,
                          user: row,
                        });
                      }}
                      sx={{ color: theme === "light" ? "#526484" : "#fff" }}
                    >
                      <EditIcon />
                    </Button>

                    <Button
                      onClick={async() => {
                        // setAddPopup({
                        //   isOpen: true,
                        //   id: row._id,
                        //   isDelete: true,
                        // });
                        try{
                          const response = await axios.delete(`/delete-product?id=${row._id}`);
                          if(response.status == 200){
                             products.splice(index , 1);
                            //  getProducts();
                            getProducts();
                            toast.success('product deleted successfully');
                           }
                         }catch(err){
                           console.log(err , "some unexpected error occured" );
                         }
                      }}
                      sx={{ color: theme === "light" ? "#526484" : "#fff" }}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </TableCell>


                      </TableRow>
                    </>
                  );
                })}
              {/* Pagination components */}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
          <Pagination
            sx={{
              button: { color: "var(--color-text-primary)" },
              color: "var(--color-text-primary)",
            }}
            size="large"
            color="primary"
            count={Math.ceil(products?.length / rowsPerPage)}
            page={page}
            variant="outlined"
            onChange={handleChangePagination}
          />

          <TablePagination
            sx={{
              ".MuiTablePagination-displayedRows": {
                color: "var(--color-text-primary)",
              },
              ".MuiTablePagination-selectLabel": {
                color: "var(--color-text-primary)",
              },
            }}
            component="div"
            count={products?.length}
            page={tablePage}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
        </Container>
      </MainBox>
    </div>
  );
}