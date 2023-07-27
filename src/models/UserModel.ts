export class UserModels{
    constructor(
        private id:string,
        private name:string,
        private email: string,
        private password: string,
        private createdAt: string
    ){}

    public getId = (): string => {
        return this.id
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public getName = ():string =>{
        return this.name
    }

    public setName = (newName:string) =>{
        this.name = newName
    }

    public getEmail = ():string =>{
        return this.email
    }

    public setEmail = (newEmail:string)=>{
        this.email = newEmail
    }

    public getPassword = ():string =>{
        return this.password
    }

    public setPassword = (newPassword:string)=>{
        this.email = newPassword
    }

    public getCreatedAt = ():string =>{
        return this.createdAt
    }

    public setCreatedAt= (newCreatedAt:string)=>{
        this.email = newCreatedAt
    }

}