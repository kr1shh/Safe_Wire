import { jwtDecode } from "jwt-decode";

const validate = () => {
  const token = localStorage.getItem("access");

  if (typeof token !== "string") {
    console.log("no token found");
    return false;
  }

  let verify;
  try {
    verify = jwtDecode(token);
  } catch (err) {
    console.log(err);
    return false;
  }

  const curTime = Date.now() / 1000;

  if (curTime < verify.exp) {
    return true;
  } else {
    return false;
  }
}

export default validate
