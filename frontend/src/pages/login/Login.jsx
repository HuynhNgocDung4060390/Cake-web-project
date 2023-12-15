import { useState } from "react";
import "./Login.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bglogin.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [phoneColor, setPhoneColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault();
    let loginInfo = username;
    let isEmail = loginInfo.includes("@");
    let isPhone = loginInfo.startsWith("0") && loginInfo.length === 10;

    if (isEmail) {
      // Check email conditions
      if (loginInfo.includes("@gmail.com")) {
        setErrorEmail("");
        setEmailColor("green");
      } else {
        setErrorEmail("Email should have @gmail.com");
        setEmailColor("red");
      }
    } else if (isPhone) {
      // Check phone conditions
      if (loginInfo.startsWith("0") && loginInfo.length === 10) {
        setErrorPhone("");
        setPhoneColor("green");
      } else {
        setErrorPhone("Phone number must be 10 digits starting with 0");
        setPhoneColor("red");
      }
    } else {
      // Check username conditions
      if (loginInfo.length > 8) {
        setErrorUserName("");
        setUserColor("green");
      } else {
        setErrorUserName("Username must be 8 letters long.");
        setUserColor("red");
      }
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long");
      setPasswordColor("red");
    }
  }

  return (
    <div className="container">
      {/* hinh */}
      <div className="image">
        <div className="image__bg"></div>
        <div className="image__holder">
          <img alt="Background" src={bg} />
        </div>
      </div>
      {/* form */}
      <div className="frame">
        {/* logo */}
        <div className="website__logo">
          <a href="/">
            <img alt="Bong cake logo" src={logo} />
          </a>
        </div>
        <div className="form">
          <div className="form__frame">
            {/* title */}
            <div className="form__title">
              <span className="form__title--title1">
                <span className={`heading`}>Đăng nhập vào tài khoản của bạn</span>
              </span>
              <span className="form__title--title2">
                <span className={`body--1`}>Tận hưởng những hương vị ngọt ngào!</span>
              </span>
            </div>
            {/* form */}
            <form className="form__frame--input">
              {/* input username */}
              <div className="form__input">
                <div className="form__input--title">
                  <div className="form__input--title1">
                    <div className={`title--3`}>Tên đăng nhập</div>
                  </div>
                </div>
                <div className="input-wrapper">
                  <TextField
                    className={`body--2`}
                    type="text"
                    placeholder={"Email/ Số điện thoại"}
                    style={{ borderColor: userColor }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                  />
                  <div className="error-container">
                    <p className="error">{errorUserName}</p>
                    <p className="error">{errorEmail}</p>
                    <p className="error">{errorPhone}</p>
                  </div>
                </div>
              </div>
              {/* input password */}
              <div className="form__input">
                <div className="form__input--title">
                  <div className="form__input--title1">
                    <div className="title--3">Mật khẩu</div>
                  </div>
                    <a href="/forgetpassword" className="title--3">Quên mật khẩu</a>
                </div>
                <div className="input-wrapper">
                  <TextField
                    className={`body--2`}
                    type="password"
                    placeholder="Mật khẩu"
                    style={{ borderColor: passwordColor }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="error-container">
                    <p className="error">{errorPassword}</p>
                  </div>
                </div>

              </div>
              {/* line */}
              <div className="form__line">
                <hr />
              </div>
              {/* button */}
              <div className="form__btn">
                <Button type="btn2 primary" className="btn" onClick={validate}>
                  Đăng nhập
                </Button>
              </div>
            </form>
            {/* link */}
            <div className="form__link">
              <div className={`title--3`}>
                <span className="form__link--title1">Bạn không có tài khoản? </span>
                <a className="form__link--title2" href="/register">
                  Đăng ký
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;