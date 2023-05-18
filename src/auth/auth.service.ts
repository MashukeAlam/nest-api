import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup(): string {
        return 'Hello World!';
    }

    signin(): object {
        return {
            msg: "Logged in!"
        }
    }
}