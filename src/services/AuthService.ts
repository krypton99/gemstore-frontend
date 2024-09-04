import axios from "axios";

const authApi = 'http://localhost:8080/api/v1/auth';

export const addUser : Function = async (user : any) => {
    const response = await axios.post(authApi + "/addNewUser", user);
    return response.data;
}

export const addUserDetail : Function = async (username : string, userDetail : any) => {
    const response = await axios.post(authApi + "/addUserDetail/" + username , userDetail);
    return response.data;
}

