export const API_URL = "https://jsonplaceholder.typicode.com/";
export const API_USERS = "users/";

export enum RequestMethod {
    GET = "GET",
    POST = "POST",
}

export const CONTENT_TYPE_DATA = "application/json;charset=utf-8";

export enum RequestStatus {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

export const HOME_PATH = "/";
export const USER_PATH = "/user/:id";
