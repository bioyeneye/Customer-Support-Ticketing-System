import "reflect-metadata";
import {useContainer, useExpressServer} from "routing-controllers";
import {UserController} from "./api/controllers/user.controller";
let compression = require("compression");
import { Container } from "typedi";

require('dotenv').config();

let express = require("express");
let app = express();
app.use(compression());

useContainer(Container);
useExpressServer(app, {
    controllers: [UserController],
    routePrefix: "api",
    cors: true,
    validation: true
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}.`);
    console.log('all routes', app._router.stack.filter((r: any) => r.route).map((r: any) => {
        const methods = Object.keys(r.route.methods);
        return '[' + methods.join(',') + '] ' + r.route.path;
    }));
});