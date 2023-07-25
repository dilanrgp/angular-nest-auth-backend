import { Equals, IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";

export class RegisterUserDto {
    
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsStrongPassword()
    password: string;

    @IsStrongPassword()
    password_confirmation: string;


}
