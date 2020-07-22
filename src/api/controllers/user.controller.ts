import {Param, Body, Get, Post, Put, Delete, JsonController, Res, Req, BadRequestError} from "routing-controllers";
import {Request, Response} from "express";
import {UserService} from "../../app/services/user.service";

@JsonController("/users")
export class UserController {

    private userService : UserService;

    constructor(userService: UserService ) {
        this.userService = userService;
    }

    @Get("/")
    async getAll(@Req() request: Request, @Res() response: Response) {
       try {
           return await this.userService.getAllUsers();
       }catch (e) {
           return new BadRequestError(e.message);
       }
    }

    @Get("/:id")
    getOne(@Param("id") id: number) {
        return "This action returns user #" + id;
    }

    @Post("/")
    post(@Body() user: any) {
        return "Saving user...";
    }

    @Put("/users/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }

}