import { createContext } from "react";
import { AuthData } from "../models/models";

const defaultAuth: AuthData = {
    email: "",
    password: "",
};

const AuthContext = createContext<AuthData>(defaultAuth);

export default AuthContext;