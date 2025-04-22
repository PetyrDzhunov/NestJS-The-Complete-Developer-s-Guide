import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class AppController {
    @Get('/test')
    getRootRoute() {
        return 'hi there testing route!';
    }
}