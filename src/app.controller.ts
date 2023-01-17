import { Controller, Get } from "@nestjs/common";

@Controller('/app')     // specify main route here
export class AppController {
    @Get('/hi')       // specify sub-routes here 
    getRootRoute() {
        return 'Hi there!';
    }

    @Get('/bye')
    getByThere() {
        return 'Bye there!';
    }
}