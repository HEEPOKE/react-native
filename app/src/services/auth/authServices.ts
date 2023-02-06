import configDB from "../../config/db";

const registerService = (payload: any) => {
  return configDB.firebaseApp.collection("user").doc().set(payload);
};

const authServices = { registerService };

export default authServices;
