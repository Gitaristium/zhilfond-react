import { FC, memo } from "react";
import Img from "../../images/user-img.png";
import styles from "./profile.module.scss";
import { Navigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../services/store/hooks";
import { getUserById } from "../../services/search/selectors";

const ProfilePage: FC = () => {
    const { id } = useParams();
    const user = useAppSelector(getUserById(Number(id)));

    return (
        <>
            {user ? (
                <section className={styles.profile}>
                    <img src={Img} alt="img" className={styles.img} />
                    <div className={styles.content}>
                        <h2 className={`title ${styles.title}`}>
                            {user?.name}
                        </h2>
                        <span>
                            <span className="subtitle">username: </span>
                            <span className="text">{user?.username}</span>
                        </span>
                        <span>
                            <span className="subtitle">email: </span>
                            <span className="text">{user?.email}</span>
                        </span>
                        <span className={styles.mb}>
                            <span className="subtitle">phone: </span>
                            <span className="text">{user?.phone}</span>
                        </span>
                        <h2 className={`title ${styles.title}`}>О себе:</h2>
                        <span className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </span>
                    </div>
                </section>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

export default memo(ProfilePage);
