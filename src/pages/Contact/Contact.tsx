import {Box, useTheme} from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from '../../theme';
import { Contact as Contacts, mockDataContacts } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../layouts/components/DashboardHeader'; 

const Contact : React.FC<{}> = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns : GridColDef<Contacts>[] = [
        { field: "id" , headerName: "ID"},
        { field: "registrarId" , headerName: "Registrar ID"},
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        { field: "phone", headerName: "Phone Number", flex: 1},
        { field: "email", headerName: "Email", flex: 1},
        { field: "address", headerName: "Address", flex: 1},
        { field: "city", headerName: "City", flex: 1},
        { field: "zipCode", headerName: "Zipcode", flex: 1},
    ]

    return(
        <Box m="20px">
            <Header title="CONTACTS" subtitle='List of Contacts for Future Reference' />
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
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text" : {
                        color: `${colors.gray[100]} !important`
                    },
                }}
            >
                <DataGrid 
                    rows={mockDataContacts}
                    columns={columns}
                    sx={{fontSize : "1rem"}}
                    slots={{toolbar: GridToolbar}}
                ></DataGrid>
            </Box>
        </Box>
    );
}

export default Contact;