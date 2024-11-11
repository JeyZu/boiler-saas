"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const prisma_service_1 = require("./infrastructure/persistence/prisma/prisma.service");
const user_repository_1 = require("./infrastructure/persistence/prisma/repositories/user.repository");
const user_service_1 = require("./application/services/user.service");
const user_controller_1 = require("./presentation/controllers/user.controller");
const keycloak_config_1 = require("./infrastructure/auth/keycloak/keycloak.config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            nest_keycloak_connect_1.KeycloakConnectModule.register(keycloak_config_1.keycloakConfig),
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            prisma_service_1.PrismaService,
            user_repository_1.UserRepository,
            user_service_1.UserService,
            {
                provide: 'IUserRepository',
                useClass: user_repository_1.UserRepository,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map