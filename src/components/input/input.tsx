import { FC, memo } from "react";
import { useForm } from "../../utils/hooks";
import styles from "./input.module.scss";
import { useAppDispatch } from "../../services/store/hooks";
import { USER_REQUEST } from "../../services/search/actions";

const Input: FC = () => {
    const dispatch = useAppDispatch();
    const { formState, handleChange, handleReset } = useForm();
    const isFormFilled = formState.search;
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (isFormFilled) {
            const sendData = {
                search: formState.search,
            };
            dispatch(USER_REQUEST(sendData));
            handleReset(e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="search"
                type="text"
                placeholder="Введите ID или имя"
                onChange={handleChange}
                value={formState.search}
                name={"search"}
            />
            <label
                htmlFor="search"
                className={`${styles.hint} ${
                    isFormFilled ? styles.active : ""
                }`}
            >
                нажмите ENTER для поиска
            </label>
            <svg
                className={`${styles.close} ${
                    isFormFilled ? styles.active : ""
                }`}
                onClick={handleReset}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
            >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
        </form>
    );
};

export default memo(Input);
