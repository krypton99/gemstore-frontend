import {Box, IconButton, useTheme, InputBase} from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../../theme"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"

const Navbar : React.FC<{}> = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box display="flex" borderRadius="3px" bgcolor={colors.primary[400]}>
                <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"></InputBase>
                <IconButton type="button" sx={{p : 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                <IconButton type="button" onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/>}
                </IconButton>
                <IconButton type="button">
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton type="button">
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton type="button">
                    <PersonOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Navbar;