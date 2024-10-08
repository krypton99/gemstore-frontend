import {Box, useTheme, Typography} from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from '../../theme';
import { Invoice , mockDataInvoices } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../layouts/components/DashboardHeader'; 

const Invoices : React.FC<{}> = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns : GridColDef<Invoice>[] = [
        { field: "id" , headerName: "ID"},
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        { field: "phone", headerName: "Phone Number", flex: 1},
        { field: "email", headerName: "Email", flex: 1},
        { field: "cost", headerName: "Cost", flex: 1, renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )},
        { field: "date", headerName: "Date", flex: 1},
    ]

    return(
        <Box m="20px">
            <Header title="INVOICES" subtitle='List of Invoice Balances' />
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
                    "& .MuiCheckbox-root" : {
                        color: `${colors.greenAccent[200]} !important`
                    }
                }}
            >
                <DataGrid 
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                    sx={{fontSize : "1rem"}}
                    slots={{toolbar: GridToolbar}}
                ></DataGrid>
            </Box>
        </Box>
    );
}

export default Invoices;