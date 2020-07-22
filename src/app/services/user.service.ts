import {Service} from "typedi";

@Service()
export class UserService {

    async getAllUsers() : Promise<string> {
        return "all users";
    }

}