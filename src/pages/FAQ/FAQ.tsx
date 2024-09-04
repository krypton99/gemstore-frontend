import { AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material"
import Accordion from "@mui/material/Accordion";
import { tokens } from "../../theme";
import Header from "../../layouts/components/DashboardHeader/DashboardHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const FAQ : React.FC<{}> = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                     An Important question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Some question describe here. Example I have a question 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                     Another Important question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Some question describe here. Example I have a question 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                     Your Favorite question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Some question describe here. Example I have a question 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                     Some random question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Some question describe here. Example I have a question 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                     Actually pre-end question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Some question describe here. Example I have a question 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                     The last question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Some question describe here. Example I have a question 1
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ