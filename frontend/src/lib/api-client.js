import axios from "axios";
import { HOST } from "../utils/constant.js";

export const apiClient = axios.create({
    baseURL: HOST,
});
