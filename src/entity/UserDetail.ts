import { Dayjs } from "dayjs";

export type UserDetail = {
    firstName: string,
    lastName: string,
    gender: boolean,
    phone: string,
    userAddress: string,
    state: string,
    dayOfBirth: Dayjs,
    point: number,
    accountBalance: number,
}