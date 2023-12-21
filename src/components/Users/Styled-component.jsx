import { Box, TableCell, styled } from "@mui/material";

export const MainBox = styled(Box)(() => ({
  background: "",
}));

export const TopBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const TopBox1 = styled(Box)(() => ({
  margin: "10px 0",
}));

export const TopTypo = styled(Box)(() => ({
  fontSize: "24px",
  fontWeight: 500,
  color: "",
}));

export const TopTypo1 = styled(Box)(() => ({
  fontSize: "14px",
  fontWeight: 400,
  color: "",
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme == "light" ? "#526484" : "#fff",
     fontSize: "16px",
    fontWeight: 600,
}));


export const StyledBTableCell = styled(TableCell)(() => ({
    fontSize: "14px",
    fontWeight: 400,
    color: "",
  }));