"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keycloakConfig = void 0;
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
exports.keycloakConfig = {
    authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL || 'http://localhost:8080/auth',
    realm: process.env.KEYCLOAK_REALM || 'clean-arch-realm',
    clientId: process.env.KEYCLOAK_CLIENT_ID || 'clean-arch-client',
    secret: process.env.KEYCLOAK_SECRET || 'your-client-secret',
    tokenValidation: nest_keycloak_connect_1.TokenValidation.ONLINE,
};
//# sourceMappingURL=keycloak.config.js.map