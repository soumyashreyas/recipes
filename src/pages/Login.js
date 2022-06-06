import React, { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../services/User";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleOnClick = () => {
    setError("");
    login(user, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Login Failed");
      });
  };
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <div className="py-5">
            <div className="container px-lg-5">
              <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div className="m-4 m-lg-5">
                  <h1 className="display-5 fw-bold">Login</h1>
                  <form>
                    <div className="form-floating mb-3 error">{error}</div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="inputText"
                        type="text"
                        placeholder="username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                      />
                      <label htmlFor="inputEmail">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleOnClick}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
