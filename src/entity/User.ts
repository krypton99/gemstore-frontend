import { Dayjs } from "dayjs";

export type User = {
    email: string,
    username: string,
    password: string,
    createAt: Dayjs,
    enabled: boolean
}