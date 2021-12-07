import axios from "axios";

export const postUser = async (fName, username, password, type) => {
  console.log("A");
  try {
    const data = await axios({
      url: `http://127.0.0.1:5000/user`,
      method: "POST",
      data: {
        FirstName: fName,
        UserName: username,
        UserPassword: password,
        UserType: type,
      },
      mode: "no-cors",
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getUser = async (userID) => {
  const data = await axios({
    url: `http://127.0.0.1:5000/`,
    method: "GET",
    data: {
      id: userID,
    },
  });
  return await data;
};

export const login = async (username, password) => {
  console.log(username);
  console.log(password);
  const response = await axios({
    url: `http://127.0.0.1:5000/user/login`,
    method: "POST",
    mode: "no-cors",
    data: {
      UserName: username,
      UserPassword: password,
    },
  });

  return response?.data.UserExists;
};
