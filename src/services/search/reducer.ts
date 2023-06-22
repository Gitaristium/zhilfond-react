import { createReducer } from "@reduxjs/toolkit";
import { TUser } from "../../utils/types";
import { USER_REQUEST } from "./actions";
import { RequestStatus } from "../../utils/vars";

const initialState = {
    users: [] as TUser[],
    requestStatus: "",
    errorMessage: "",
};

export const usersReducer = createReducer(initialState, (builder): void => {
    builder

        // ===================================
        // ===== записываем пользователя =====
        // ===================================

        // Вызывается прямо перед выполнением запроса
        .addCase(USER_REQUEST.pending, (state) => {
            state.requestStatus = RequestStatus.LOADING;
            state.errorMessage = initialState.errorMessage;
        })
        // Вызывается в том случае если запрос успешно выполнился
        .addCase(USER_REQUEST.fulfilled, (state, action) => {
            state.requestStatus = RequestStatus.SUCCESS;
            state.users = action.payload;
        })
        // Вызывается в случае ошибки
        .addCase(USER_REQUEST.rejected, (state, action) => {
            state.requestStatus = RequestStatus.ERROR;
            // state.errorMessage = action.payload.errorMessage;
        })

        .addDefaultCase((state) => state);
});
