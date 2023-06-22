import { FC, PropsWithChildren, memo } from "react";
import styles from "./spiner.module.scss";

const Spiner: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <span className={styles.spiner}></span>
            {children}
        </>
    );
};
export default memo(Spiner);
