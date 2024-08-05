import classNames from "classnames/bind";
import styles from "./LoginForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "../../authenticate";
import { Login } from "../../model/login";

const cx = classNames.bind(styles);

const LoginForm = () => {
  const [input, setInput] = useState<Login>({
    usernameOrEmail: "",
    password: "",
  });

  const auth = useAuth();

  const handleSubmitEvent = async (e: any) => {
    e.preventDefault();
    if (input.usernameOrEmail !== "" && input.password !== "") {
      await auth.loginAction(input);
      return;
    }
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(input);
  return (
    <div className={cx("container")}>
      <form action="" className={cx("login-form")} onSubmit={handleSubmitEvent}>
        <span className={cx("login-form-title")}>Login</span>
        <div className={cx("wrap-input")}>
          <input
            className={cx("login-form-input")}
            type="email"
            placeholder="Email"
            name="usernameOrEmail"
            onChange={handleInput}
          />
          <span className={cx("focus-input")}></span>
          <FontAwesomeIcon
            className={cx("login-form-symbol")}
            icon={faEnvelope}
          />
        </div>
        <div className={cx("wrap-input")}>
          <input
            className={cx("login-form-input")}
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
          />
          <span className={cx("focus-input")}></span>
          <FontAwesomeIcon className={cx("login-form-symbol")} icon={faLock} />
        </div>
        <div className={cx("wrap-checkbox")}>
          <input
            id="remember"
            className={cx("login-form-checkbox")}
            type="checkbox"
          />
          <label htmlFor="remember" className={cx("login-form-label-checkbox")}>
            Remember me
          </label>
        </div>
        <div className={cx("wrap-button")}>
          <button className={cx("login-form-btn")}> Login </button>
        </div>
        {auth.isLoginFailed && <span className={cx("error-msg")}>Wrong password or email!</span>}
        <div className={cx("wrap-signup")}>
          <span className={cx("login-form-signup-text")}>Not a member?</span>
          <a
            className={cx("login-form-signup-text", "hov1", "bo1")}
            href="www.google.com"
          >
            Sign up now
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
