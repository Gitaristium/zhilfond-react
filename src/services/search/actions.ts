import { createAsyncThunk } from "@reduxjs/toolkit";
import { TUser } from "../../utils/types";
import { requestApi } from "../../utils/request-api";
import { CONTENT_TYPE_DATA, RequestMethod } from "../../utils/vars";

const REDUCER_NAME = "search";

// =========================================
// ===== получаем данные пользователя ======
// =========================================
type TSearch = {
    search: string;
};

export const USER_REQUEST = createAsyncThunk<TUser[], TSearch>(
    `${REDUCER_NAME}/request`,
    async ({ search }: TSearch) => {
        const arr = search.split(/[-+, .;:"]/);

        console.log(arr);
        let send = "?";

        arr.map((el) =>
            Number(el)
                ? (send += `id=${el}&`)
                : el !== ""
                ? (send += `username=${
                      el.charAt(0).toUpperCase() + el.slice(1)
                  }&`)
                : null
        );

        console.log(send);
        // const send = Number(search)
        //     ? search
        //     : `?username=${search.charAt(0).toUpperCase() + search.slice(1)}`;
        // Здесь только логика запроса и возврата данных
        // Никакой обработки ошибок
        const response = await requestApi(send, {
            method: RequestMethod.GET,
            headers: {
                "Content-Type": CONTENT_TYPE_DATA,
            },
        });

        let result = [];
        Array.isArray(response) ? (result = response) : result.push(response);

        return result;
    }
);
