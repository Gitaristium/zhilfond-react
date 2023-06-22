import { FC, memo } from "react";
import { TUser } from "../../utils/types";
import Img from "../../images/user-img-small.png";
import styles from "./user-plate.module.scss";
import { NavLink } from "react-router-dom";

type TProps = {
    user: TUser;
};

const UserPlate: FC<TProps> = ({ user }) => {
    return (
        <NavLink to={`/user/${user.id}`} className={styles.link}>
            {({ isActive }) => (
                <article className={styles.article}>
                    <img
                        src={Img}
                        alt="img"
                        className={`${styles.img} ${
                            isActive ? styles.active : ""
                        }`}
                    />
                    <span
                        className={`${styles.desc} ${
                            isActive ? styles.active : ""
                        }`}
                    >
                        <h6 className={`title ${styles.name}`}>
                            {user.username}
                        </h6>
                        <p className={`text ${styles.email}`}>{user.email}</p>
                    </span>
                </article>
            )}
        </NavLink>
    );
};

export default memo(UserPlate);
