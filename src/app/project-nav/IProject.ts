import { IUser } from "../user/IUser"

export interface IProject {
    id: number
    name: string
    description: string
    dateCreation: string
    attachments: any[]
    teams: IUser[]
    links: string[]
}