import { Entity } from "../../../shared/domain/entities/entity";

export type UserProps = {
  name: string,
  email: string,
  password: string,
  createdAt?: Date
}



export class UserEntity extends Entity<UserProps>{
  constructor(public readonly props: UserProps, id?: string){
    super(props, id)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  updateName(value: string):void{
    this.name = value;
  }
  updatePassword(value: string):void{
    this.password = value;
  }

  get name(){
    return this.props.name;
  }
  private set name(name:string){
    this.props.name = name;
  }

  get email(){
    return this.props.email;
  }
  get password(){
    return this.props.password;
  }
  private set password(password:string){
    this.props.password = password;
  }
  get createdAt(){
    return this.props.createdAt;
  }

}


