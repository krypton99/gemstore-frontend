import classNames from "classnames/bind"
import styles from './Dashboard.module.scss'
import { useAuth } from "../../authenticate";

const cx = classNames.bind(styles);



const Dashboard : React.FC<{}> = () => {

    const auth = useAuth();

    return (
        <div className={cx("wrapper")}>
            <h1>Welcome to Dashboard</h1>
            <h2>Welcome {auth.user}</h2>
            <button className={cx("btn-submit")} onClick={auth.logOut}>Log out</button>
        </div>
    )
}

export default Dashboard