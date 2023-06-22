import { FC, memo } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
    return (
        <header>
            <div className="container">
                <nav className={styles.nav}>
                    <Link to="/" className={styles.logo}>
                        Жилфонд
                    </Link>
                    <span className={`link ${styles.link}`}>Пользователь</span>
                </nav>
            </div>
        </header>
    );
};

export default memo(Header);
