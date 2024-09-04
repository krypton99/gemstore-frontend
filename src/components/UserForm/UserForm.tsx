import {Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, useTheme } from "@mui/material";
import {Formik, useFormik} from 'formik';
import * as yup from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from '../../layouts/components/DashboardHeader'
import { User } from "../../entity/User";
import { tokens } from "../../theme";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import  dayjs, { Dayjs } from "dayjs";
import { addUser, addUserDetail } from "../../services/AuthService";
import { UserDetail } from "../../entity/UserDetail";

const initialValues = {
    email: "",
    username: "",
    password: "",
    createAt: dayjs(Date.now()),
    enabled: true,
    firstName: "",
    lastName: "",
    gender: false,
    phone: "",
    address: "",
    state: "",
    dayOfBirth: dayjs(Date.now()),
    point: 0,
    accountBalance: 0,
};




const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup
    .string()
    .email("Invalid email")
    .required("required"),
    phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
    address: yup.string().required("required"),
    state: yup.string().required("required"),
    password: yup.string().min(6).max(20).required("required"),
})

const UserForm : React.FC<{}> = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const handleFormSubmit = async (values : any) => {
        const user : User = {
            email: values.email,
            username: values.username,
            password: values.password,
            createAt: dayjs(Date.now()),
            enabled: true,
        }
        var userDetail : UserDetail = {
            firstName: values.firstName,
            lastName: values.lastName,
            gender: values.gender,
            phone: values.phone,
            userAddress: values.address,
            state: values.state,
            dayOfBirth: dayjs(Date.now()),
            point: 0,
            accountBalance: 0,
        }
        console.log(userDetail);
        console.log(user)
        await addUser(user);
        await addUserDetail(user.username, userDetail);
    }
    
    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile"/>

            <Formik 
                onSubmit={handleFormSubmit}
                initialValues={initialValues} 
                validationSchema={userSchema}
            >
                {({values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue}) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                            display="grid" 
                            gap="30px" 
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div" : {gridColumn : isNonMobile ? undefined : "span 4"},
                                ".Mui-focused" : {color : `${colors.gray[100]} !important`},
                            }}
                            >
                                <TextField 
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label = "User Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.username}
                                    name="username"
                                    error={!!touched.username && !!errors.username}
                                    helperText={touched.username && errors.username}
                                    sx={{gridColumn: "span 4"}}
                                />
                                <TextField 
                                    fullWidth
                                    variant="filled"
                                    type="password"
                                    label = "Password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    name="password"
                                    error={!!touched.password && !!errors.password}
                                    helperText={touched.password && errors.password}
                                    sx={{gridColumn: "span 4"}}
                                />
                                <TextField 
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label = "First Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name="firstName"
                                    error={!!touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{gridColumn: "span 2"}}
                                />
                                 <TextField 
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label = "Last Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name="lastName"
                                    error={!!touched.lastName && !!errors.lastName}
                                    helperText={touched.lastName && errors.lastName}
                                    sx={{gridColumn: "span 2"}}
                                />
                                <TextField 
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label = "Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{gridColumn: "span 2", 
                                        
                                    }}
                                />
                                <Box sx={{gridColumn: "span 2"}}>  
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue={true}
                                    value={values.gender}
                                    onChange={handleChange}
                                    name="gender"
                                >
                                    <FormControlLabel value={false} control={<Radio />} label="Female" />
                                    <FormControlLabel value={true} control={<Radio />} label="Male" />
                                </RadioGroup>
                                </Box>
                                <TextField 
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label = "Phone Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.phone}
                                    name="phone"
                                    error={!!touched.phone && !!errors.phone}
                                    helperText={touched.phone && errors.phone}
                                    sx={{gridColumn: "span 2"}}
                                />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer sx={{mt : "-8px"}} components={['DatePicker']}  >
                                        <DatePicker label="Day of birth" onChange={(value : any) => {setFieldValue('dayOfBirth', dayjs(value))}} value={(values.dayOfBirth)} name="dayOfBirth"/>
                                    </DemoContainer>
                                </LocalizationProvider>
                                <TextField 
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label = "Address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address}
                                    name="address"
                                    error={!!touched.address && !!errors.address}
                                    helperText={touched.address && errors.address}
                                    sx={{gridColumn: "span 4"}}
                                />
                                <TextField 
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label = "State"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.state}
                                    name="state"
                                    error={!!touched.state && !!errors.state}
                                    helperText={touched.state && errors.state}
                                    sx={{gridColumn: "span 4"}}
                                />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained"> 
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default UserForm;