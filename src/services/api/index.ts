import axios from 'axios';
import getConfig from 'next/config';

const apiConfig = getConfig().publicRuntimeConfig.app.api;
const ROUTES = apiConfig.routes;

// Client

const _withClientCookies = (ctx) => {
    return {
        headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
    };
};

const apiClient = axios.create({
    baseURL: apiConfig.host,
});

// General
export const getApiStatus = () => apiClient.get(ROUTES.state);

// Authentication
export const signIn = (credentials) => apiClient.post(ROUTES.authentication.signIn, credentials);
export const signUp = (registrationDetails) => apiClient.post(ROUTES.authentication.signUp, registrationDetails);

// Me
export const getMe = (ctx) => apiClient.get(ROUTES.me.get, _withClientCookies(ctx));

// Users
export const updateUserInfos = (ctx, userInfos) => apiClient.patch(ROUTES.state, userInfos, _withClientCookies(ctx));
