import classNames from 'classnames/bind';
import styles from './Login.module.scss'
import LoginForm from '../../components/LoginForm';

const cx = classNames.bind(styles);

const Login : React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <LoginForm/>
        </div>
    );
}

export default Login;