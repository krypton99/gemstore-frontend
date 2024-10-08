import {Box, Button, Typography, useTheme} from '@mui/material';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from '../../theme';
import { Member, mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../layouts/components/DashboardHeader'; 
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import React, { MouseEventHandler } from 'react';

const Team : React.FC<{}> = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns : GridColDef<Member>[] = [
        { field: "id" , headerName: "ID"},
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        { field: "phone", headerName: "Phone Number", flex: 1},
        { field: "email", headerName: "Email", flex: 1},
        { 
            field: "access", 
            headerName: "Access Level",
            flex: 1,
            renderCell: ( { row: { access }} ) => {
                return (
                    <Box
                        width="60%"
                        m="8px auto"
                        //mt="10px"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        bgcolor={
                            access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                      {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
                      {access === "manager" && <SecurityOutlinedIcon/>}
                      {access === "user" && <LockOpenOutlinedIcon/>}
                      <Typography color={colors.gray[100]} sx={{ml : "5px"}}>
                        {access}
                      </Typography>
                    </Box>
                )
            }
        },
    ];
    const navigation = useNavigate();
    const handleCreateUser : React.MouseEventHandler<HTMLButtonElement> = (e : React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        console.log("hello");
        navigation("./createUser");
    }

    return(
        <Box m="20px">
            <Header title="TEAM" subtitle='Managing the Team Members' />
            <Box display="flex" justifyContent="end">
                <Button 
                sx={{ 
                color : `${colors.gray[100]}`, 
                backgroundColor : `${colors.greenAccent[600]}`
                }}
                onClick={handleCreateUser} 
                >
                Create User
                </Button>
            </Box>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root" : {
                        border : "none",
                    },
                    "& .MuiDataGrid-cell" : {
                        borderBottom : "none",
                    },
                    "& .name-column--cell" : {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders" : {
                        "--DataGrid-containerBackground" : `${colors.blueAccent[700]}`,
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller" : {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer" : {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                }}
            >
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                    sx={{fontSize : "1rem"}}
                ></DataGrid>
            </Box>
        </Box>
    );
}

export default Team;