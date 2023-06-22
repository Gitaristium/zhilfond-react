import { FC, memo } from "react";
import styles from "./home.module.scss";

const HomePage: FC = () => {
    return (
        <section className={styles.clear}>
            <span className="text">
                Выберите сотрудника, чтобы посмотреть его профиль
            </span>
        </section>
    );
};

export default memo(HomePage);
