import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTUyYTFlZjMwMzc3OWQyOTE5MTdlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY0OTgwMywiZXhwIjoxNjUwOTA5MDAzfQ.wwHx88w9OT6gnabC2aMy0bj-DlqHPHu59jGysm9naYs";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Beaer ${TOKEN}`},
});