import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import styles from "./app.module.scss";
import { HOME_PATH, USER_PATH } from "../../utils/vars";
import { HomePage, ProfilePage } from "../../pages";

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className={styles.inner}>
                        <Sidebar />
                        <Routes>
                            <Route path={HOME_PATH} element={<HomePage />} />
                            <Route path={USER_PATH} element={<ProfilePage />} />
                        </Routes>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
