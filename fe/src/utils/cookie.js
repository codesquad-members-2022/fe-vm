import { Cookies } from 'react-cookie';

const AUTH = 'auth-token';

const cookies = new Cookies();

export const setCookie = (name, value, option) => cookies.set(name, value, { ...option });

export const getCookie = name => cookies.get(name);

export const isLogin = () => !!getCookie(AUTH);
