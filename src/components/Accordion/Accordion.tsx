import * as React from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./accordion.scss";
import { AccordionProps } from "../../types";

const ControlledAccordions: React.FC<AccordionProps> = ({ usersData }) => {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div className="accordion__container">
			{usersData.map((user, index) => (
				<Accordion
					expanded={expanded === `panel${index}`}
					onChange={handleChange(`panel${index}`)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography sx={{ width: "33%", flexShrink: 0 }}>
							{user.firstname} {user.lastname}
						</Typography>
						<Typography sx={{ color: "text.secondary" }}>
							Age: {user.age} Phone: {user.phone}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
							feugiat. Aliquam eget maximus est, id dignissim quam.
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};

export default ControlledAccordions;
