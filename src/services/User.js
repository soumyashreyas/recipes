import data from "./data.json";
import { saveUserInfo } from "../components/User"

const dummyApi = (username, password) => {
  if (data[username] && data[username].password == password) {
    return Promise.resolve(data[username].role);
  }
  return Promise.reject("Invalid User");
};

const login = (username, password) => {
  return dummyApi(username, password).then((role) => {
    saveUserInfo({
      username,
      role,
    });
    return {
      status: "Success",
      data: role,
    };
  });
};
export { login };
