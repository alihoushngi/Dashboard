import React, { useContext } from "react";
import { userContext } from "../../../context/UserContextProvider";
import Wallet from "../../elements/Wallet/Wallet";
import ReChart from "../../elements/Rechart";
import "./Dashboard.scss";
import { nFormatter } from "../../../helpers";
import Coins from "../../elements/Coins";
import { Helmet } from "react-helmet-async";

const data = [
  {
    Sell: 4000,
    Buy: 2400,
  },
  {
    Sell: 3000,
    Buy: 1398,
  },
  {
    Sell: 2000,
    Buy: 9800,
  },
  {
    Sell: 2780,
    Buy: 3908,
  },
  {
    Sell: 1890,
    Buy: 4800,
  },
  {
    Sell: 2390,
    Buy: 3800,
  },
  {
    Sell: 3490,
    Buy: 4300,
  },
];

function Dashboard() {
  const { user } = useContext(userContext);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="This is an dashboard page" />
      </Helmet>
      <div className="row g-0">
        <div className="container align-items-center d-flex justify-content-center text-light wallet_wrapper ">
          {user.wallets.map((item, index) => (
            <Wallet
              image={item.image}
              key={index}
              title={item.name}
              usd={item.usd}
              balance={item.balance}
            />
          ))}
        </div>
        <div className="text-light row g-0 justify-content-center">
          <div className="col-12 col-md-6 overview text-center">
            <h3 className="text-capitalize">overview</h3>
            <p className="mt-3">
              Total Balance : USD {nFormatter(user.totalbalance, 1)}
            </p>
            <p>Revenue : USD {nFormatter(user.revenue, 0)}</p>
          </div>
          <div className="Chart_wrapper col-12 col-md-6 mt-3">
            <h3 className="text-light  text-capitalize text-center mt-3">
              Transaction
            </h3>
            <div className="Chart_data">
              <ReChart data={data} />
            </div>
          </div>
        </div>
        <div className="Coins_wrapper container mt-3">
          <Coins />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
