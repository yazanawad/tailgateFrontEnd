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
    url: `http://127.0.0.1:5000/user/get`,
    method: "POST",
    mode: "no-cors",

    data: {
      UserId: userID,
    },
  });

  return data.data;
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
  console.log(response.data);
  return response?.data;
};

export const getAllTailgates = async () => {
  const res = await axios({
    url: `http://127.0.0.1:5000/tailgate/all`,
    method: "GET",
    mode: "no-cors",
  });
  return res.data;
};

export const getUserTailgate = async (userID) => {
  const res = await axios({
    url: `http://127.0.0.1:5000/user/tailgates`,
    method: "POST",
    data: {
      OwnerUserId: userID,
    },
    mode: "no-cors",
  });
  return res.data;
};

export const createTailgates = async (
  owner,
  tailgateName,
  cap,
  location,
  TailgateDescription
) => {
  console.log("create tailgates");
  console.log(owner);
  console.log(tailgateName);
  console.log(cap);
  console.log(location);
  console.log(TailgateDescription);

  try {
    const response = await axios({
      url: `http://127.0.0.1:5000/tailgate`,
      method: "POST",
      mode: "no-cors",
      data: {
        OwnerUserId: owner,
        TailgateName: tailgateName,
        Capacity: cap,
        Location: location,
        TailgateDescription: TailgateDescription,
      },
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const getSingleTailgate = async (tid) => {
  const res = await axios({
    url: `http://127.0.0.1:5000/tailgate/get`,
    method: "POST",
    mode: "no-cors",
    data: {
      TailgateId: tid,
    },
  });
  return res.data;
};

export const joinTailgate = async (userID, tailgateID) => {
  const res = await axios({
    url: `http://127.0.0.1:5000/tailgate/guest`,
    method: "POST",
    mode: "no-cors",
    data: {
      TailgateId: tailgateID,
      UserId: userID,
    },
  });
  console.log(res);
};

export const deleteTailgate = async (tailgateID) => {
  const res = await axios({
    url: `http://127.0.0.1:5000/tailgate`,
    method: "DELETE",
    data: {
      TailgateId: tailgateID,
    },
    mode: "no-cors",
  });
};

export const deleteFromTailgate = async (userID, tailgateID) => {
  const res = await axios({
    url: `http://127.0.0.1:5000/tailgate/guest`,
    method: "DELETE",
    mode: "no-cors",
    data: {
      TailgateId: tailgateID,
      UserId: userID,
    },
  });
  console.log(res);
};

export const getAttendees = async (tailgateID) => {
  const res = await axios({
    url: `http://127.0.0.1:5000/tailgate/attendees`,
    method: "POST",
    mode: "no-cors",
    data: {
      TailgateId: tailgateID,
    },
  });
  console.log("GETTING ATTENDEES");
  console.log(res.data);
  return res.data;
};
