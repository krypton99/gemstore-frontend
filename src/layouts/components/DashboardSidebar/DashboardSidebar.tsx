import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined"
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined"
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import { useAuth } from "../../../authenticate";

type ItemProps = {
    title : string,
    to: string,
    icon: any,
    selected : string,
    setSelected : any,
}

const Item : React.FC<ItemProps> = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title} style={{color : colors.gray[100]}} onClick={() => setSelected(title)} icon={icon}>
            <Link to={to}>
                <Typography variant="h5">{title}</Typography>
            </Link>
        </MenuItem>
    )
}


const Sidebar: React.FC<{}> = () => {
    
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState("Dashboard");
  const auth = useAuth();

  return (
    <Box  
        sx={{
            "& .ps-sidebar-container" : {
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper" : {
                backgroundColor: "transparent !important"
            },
            "& .ps-menuitem-root a" : {
                color: colors.gray[100],
            },
            "& .ps-menu-button:hover" : {
                color : "#868dfb !important",
                backgroundColor : "transparent !important"
            },
            "& .ps-menu-button:hover a" : {
                color : "#868dfb !important",
                backgroundColor : "transparent !important"
            },
            "& .ps-menu-button.ps-active" : {
                color : "#6870fa !important"
            },
            "& .ps-menu-button.ps-active a" : {
                color : "#6870fa !important"
            },
            "& .ps-sidebar-root" : {
                minWidth : "260px"
            }

        }}
    >
        <ProSidebar collapsed={isCollapsed} style={{height : "100%"}} >
            <Menu>
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                    }}
                >
                    {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.gray[100]}>
                                ADMIN
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>

                {/* {USER} */}
                {!isCollapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img 
                            alt="profile-user" 
                            width="100px"
                            height="100px" 
                            src={`/assets/user.png`}
                            style={{cursor: "pointer", borderRadius: "50%"}} />
                        </Box>

                        <Box textAlign="center">
                            <Typography variant="h2" color={colors.gray[100]} fontWeight="bold" sx={{ m: "10px 0 0 0"}}>{auth.user}</Typography>
                            <Typography variant="h5" color={colors.greenAccent[500]}>Fancy Admin</Typography>
                        </Box>
                    </Box>
                )}

                {/* MENU ITEM */}
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item 
                        title="Dashboard"
                        to="/dashboard"
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Typography
                        variant="h6"
                        color={colors.gray[300]}
                        sx = {{m : "15px 0 5px 20px"}}
                    >Data</Typography>
                    <Item 
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Contacts Information"
                        to="/contacts"
                        icon={<HomeOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Invoices Balances"
                        to="/invoices"
                        icon={<ReceiptOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                     <Typography
                        variant="h6"
                        color={colors.gray[300]}
                        sx = {{m : "15px 0 5px 20px"}}
                    >Pages</Typography>
                    <Item 
                        title="Profile Form"
                        to="/form"
                        icon={<PersonOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarTodayOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="FAQ Page"
                        to="/faq"
                        icon={<HelpOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Typography
                        variant="h6"
                        color={colors.gray[300]}
                        sx = {{m : "15px 0 5px 20px"}}
                    >Charts</Typography>
                    <Item 
                        title="Bar Chart"
                        to="/bar"
                        icon={<BarChartOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Pie Chart"
                        to="/pie"
                        icon={<PieChartOutlineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Line Chart"
                        to="/line"
                        icon={<TimelineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item 
                        title="Geography Chart"
                        to="/geography"
                        icon={<MapOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
            </Menu>
        </ProSidebar>
    </Box>
  );
};

export default Sidebar;
