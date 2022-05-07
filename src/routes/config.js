import Account from "../components/screens/Account";
import Dashboard from "../components/screens/Dashboard";
import News from "../components/screens/News";
import SendMoney from "../components/screens/SendMoney";
import { ROUTE_CONSTANT } from "./constant";

export const appRouts = [
  {
    name: "dashboard",
    component: <Dashboard />,
    path: "/",
    access: ROUTE_CONSTANT.PROTECTED,
    children: [],
  },
  {
    name: "account",
    component: <Account />,
    path: "/account",
    access: ROUTE_CONSTANT.PROTECTED,
    children: [],
  },
  {
    name: "news",
    component: <News />,
    path: "/news",
    access: ROUTE_CONSTANT.MEMBER,
    children: [],
  },
  {
    name: "sendmoney",
    component: <SendMoney />,
    path: "/sendmoney",
    access: ROUTE_CONSTANT.PROTECTED,
    children: [],
  },
];
