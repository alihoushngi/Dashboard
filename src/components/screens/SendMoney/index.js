import React, { useContext, useState } from "react";
import { userContext } from "../../../context/UserContextProvider";
import Wallet from "../../elements/Wallet/Wallet";
import Select from "react-select";
import "./SendMoney.scss";
import { Toastify } from "../../elements/Toastify";
import { Helmet } from "react-helmet-async";

const SendMoney = () => {
  // context
  const { user, setUser } = useContext(userContext);
  //  All Wallets
  const wallets = user.wallets;
  //  selected Wallets
  const [selctedWallet, setSelctedWallet] = useState({
    label: "Bitcoin",
    value: "Bitcoin",
  });

  // Form State for Amout Value and State Value
  const [form, setForm] = useState({ amount: "", address: "" });

  // Create an Object For SelectOption Props for <Select></Select>
  const selectOptions = wallets.map((wallet) => {
    return { value: wallet.name, label: wallet.name };
  });

  // OnChange Function For <Select></Select>
  const walletChangeHandler = (e) => {
    setSelctedWallet(e);
  };
  // OnSubmit Function for Form Element
  const formHandler = (e) => {
    // Disable Reloading
    e.preventDefault();

    // find Selected Wallet Name from Context wallets
    const selectedWallet = wallets.find(
      (wallet) => wallet.name === selctedWallet.value
    );
    // Condition for checking valid amount
    if (form.amount <= selectedWallet.usd) {
      // Update selected Wallet usd
      selectedWallet.usd = selectedWallet.usd - form.amount;
      // Update UserContext
      setUser({
        // Rest User OBJ
        ...user,
        // Update User Wallets
        wallets: [
          // Rest User Wallets except selected wallet
          ...wallets.filter((wallet) => {
            return wallet.name !== selctedWallet.value;
          }),
          // update USD amount of Wallet that we changed in line 42
          selectedWallet,
        ],
      });
    } else {
      // error
      Toastify("error", "Not enough Balance");
    }
  };

  return (
    <>
      <Helmet>
        <title>Send Money</title>
        <meta name="description" content="this is a Send Money page" />
      </Helmet>
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
              selctedWallet={selctedWallet}
              onChange={walletChangeHandler}
              value={selctedWallet}
              className="Option"
            />
          </div>

          <div className="container justify-content-center d-flex">
            <div className="Input_wrapperr ">
              <label className="text-light ">Amount</label>
              <input
                id="amount"
                name="amount"
                type="text"
                className="Input"
                value={form.amount}
                onChange={(e) =>
                  setForm({
                    ...form,
                    amount: parseInt(e.target.value),
                  })
                }
                autoComplete="off"
              />
            </div>
            <div className="Input_wrapperr ">
              <label className="text-light ">Reacive Address</label>
              <input
                id="address"
                name="address"
                type="text"
                className="Input"
                value={form.address}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: e.target.value,
                  })
                }
                autoComplete="off"
              />
            </div>
          </div>
          <div className="Button_submit d-flex justify-content-center">
            <div className="button_wrapper">
              <button href="#" className="mt-4 text-uppercase" type="submit">
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
