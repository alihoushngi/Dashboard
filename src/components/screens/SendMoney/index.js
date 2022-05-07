import React, { useContext, useState } from "react";
import { userContext } from "../../../context/UserContextProvider";
import Wallet from "../../elements/Wallet/Wallet";
import Select from "react-select";
import "./SendMoney.scss";

const SendMoney = () => {
  const { user } = useContext(userContext);
  const { input } = useState("");
  const wallets = user.wallets;
  const setContextValue = user.setUser;

  const [defaultValue, setDefaultValue] = useState({
    label: "Bitcoin",
    value: "Bitcoin",
  });

  const selectOptions = wallets.map((wallet) => {
    return { value: wallet.name, label: wallet.name };
  });

  const walletChangeHandler = (e) => {
    setDefaultValue(e);
  };

  const [form, setForm] = useState({ amount: "", address: "" });
  console.log(form);

  const formHandler = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      wallet: defaultValue,
    };
  };

  // const inputReceiverHandler = (event) => {
  //   setInput(event.target.value);
  // };

  return (
    <>
      <div className="container align-items-center d-flex justify-content-center text-light">
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
      <div className="container justify-content-center d-flex">
        <form
          onSubmit={formHandler}
          className="d-flex justify-content-center flex-column"
        >
          <div className="w-75 align-self-center">
            <h3 className="text-uppercase mb-3">
              Select your Coin in your wallet 👇
            </h3>
            <Select
              options={selectOptions}
              defaultValue={defaultValue}
              onChange={walletChangeHandler}
              value={defaultValue}
              className="Option"
            />
          </div>

          <div className="container justify-content-center d-flex">
            <div className="Input_wrapper position-relative">
              <label className="text-light position-absolute">Amount</label>
              <input
                id="amount"
                name="amount"
                type="number"
                className="m-4 Input"
                value={form.amount}
                onChange={(e) =>
                  setForm({
                    ...form,
                    amount: e.target.value,
                  })
                }
              />
            </div>
            <div className="Input_wrapper position-relative">
              <label className="text-light position-absolute">
                Reacive Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="m-4 Input"
                value={form.address}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="Button_submit d-flex justify-content-center">
            <div className="button_wrapper">
              <button href="#" className="m-4 text-uppercase" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                quick transition
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SendMoney;
