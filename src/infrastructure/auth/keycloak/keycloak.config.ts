import { KeycloakConnectOptions, TokenValidation } from 'nest-keycloak-connect';

export const keycloakConfig: KeycloakConnectOptions = {
  authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL || 'http://localhost:8080/auth',
  realm: process.env.KEYCLOAK_REALM || 'clean-arch-realm',
  clientId: process.env.KEYCLOAK_CLIENT_ID || 'clean-arch-client',
  secret: process.env.KEYCLOAK_SECRET || 'your-client-secret',
  tokenValidation: TokenValidation.ONLINE,
};