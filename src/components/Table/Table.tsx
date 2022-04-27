import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableProps } from "../../types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const CustomizedTables: React.FC<TableProps> = ({ carsData }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Brand</StyledTableCell>
						<StyledTableCell>Model</StyledTableCell>
						<StyledTableCell>Price</StyledTableCell>
						<StyledTableCell>Preview</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{carsData.map((car, index) => (
						<StyledTableRow key={index}>
							<StyledTableCell component="th" scope="row">
								{car.brand}
							</StyledTableCell>
							<StyledTableCell>{car.model}</StyledTableCell>
							<StyledTableCell>{car.price}</StyledTableCell>
							<StyledTableCell>
								<a href="/">
									<img
										src="/new_tab_icon.png"
										alt=""
										className="icon_new_tab"
									/>
								</a>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CustomizedTables;
