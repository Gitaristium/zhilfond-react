import { createSelector } from "reselect";
import { RootState } from "../store/hooks";
import { TUser } from "../../utils/types";

// статус соединения
export const getRequestStatus = createSelector(
    (store: RootState): string => store.users.requestStatus,
    (data): string => data
);

// сообщение ошибки
export const getErrorMessage = createSelector(
    (store: RootState): string => store.users.errorMessage,
    (data): string => data
);

// пользователи
export const getUsers = createSelector(
    (store: RootState): TUser[] => store.users.users,
    (data): TUser[] => data
);

// дергаем пользователя из стора по id
export const getUserById = (id: number) =>
    createSelector(
        (store: RootState): TUser[] => store.users.users,
        (data): TUser | undefined => data.find((u) => u.id === id)
    );
