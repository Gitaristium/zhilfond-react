import { FC, memo } from "react";
import "./sidebar.module.scss";
import Input from "../input/input";
import { useAppSelector } from "../../services/store/hooks";
import { getRequestStatus, getUsers } from "../../services/search/selectors";
import { RequestStatus } from "../../utils/vars";
import Spiner from "../spiner/spiner";
import UserPlate from "../user-plate/user-plate";

const Sidebar: FC = () => {
    const requstStatus = useAppSelector(getRequestStatus);
    const users = useAppSelector(getUsers);

    const text = (
        <span className="text">
            {requstStatus === "" && "начните поиск"}
            {requstStatus === RequestStatus.LOADING && (
                <Spiner> ищем пользователей</Spiner>
            )}
            {requstStatus === RequestStatus.ERROR && "ничего не найдено "}
            {requstStatus === RequestStatus.SUCCESS &&
                !users.length &&
                "ничего не найдено "}
        </span>
    );

    return (
        <aside>
            <h3 className="title">Поиск сотрудников</h3>
            <Input />
            <h3 className="title">Результаты</h3>
            {requstStatus === RequestStatus.SUCCESS && users.length
                ? users.map((user) => (
                      <UserPlate key={user.username} user={user} />
                  ))
                : text}
        </aside>
    );
};

export default memo(Sidebar);
