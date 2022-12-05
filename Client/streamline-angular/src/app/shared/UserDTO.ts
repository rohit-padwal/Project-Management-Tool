export interface UserDTO {
    userId: number,
    userName: string,
    ticketId: string,
    password: string,
    projectId: string,
    email: string,
    created: Date,
    enabled: boolean,
    isAdmin: boolean
}