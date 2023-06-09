import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    signup(): string {
        return this.authService.signup();
    }

    @Post('signin')
    signin(): object {
        return this.authService.signin();
    }
}