import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";

export const AddCustomerPage = () => {
  const [first_name, set_Firstname] = useState("");
  const [last_name, set_Lastname] = useState("");
  const [email, set_Email] = useState("");
  const [number, set_Number] = useState("");
  
  const get_Firstname = (event) => {
    set_Firstname(event.target.value);
  };
  const get_Lastname = (event) => {
    set_Lastname(event.target.value);
  };
  const get_Email = (event) => {
    set_Email(event.target.value);
  };
  const get_Number = (event) => {
    set_Number(event.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (first_name === "") return;
    if (email === "") return;
    if (number === "" || number.length !== 9) return;
    const customerData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: number,
    };
    const response = fetch("http://127.0.0.1:8000/customers", {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    set_Firstname("");
    set_Lastname("");
    set_Email("");
    set_Number("");
  };

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex"></div>
      </div>

      <form onSubmit={submitForm} className="Customer_details">
        <label>First name:</label>
        <input
          onChange={get_Firstname}
          value={first_name}
          placeholder="Zbyszek"
          type="text"
        ></input>

        <label>Last name:</label>
        <input
          onChange={get_Lastname}
          value={last_name}
          placeholder="Kieliszek"
          type="text"
        ></input>

        <label>E-mail:</label>
        <input
          onChange={get_Email}
          value={email}
          placeholder="contact@mail.com"
          type="text"
        ></input>

        <label>Phone number:</label>
        <input
          onChange={get_Number}
          value={number}
          placeholder="997 007 696"
          type="text"
        ></input>
        <button type="submit">Add customer</button>
      </form>
    </div>
  );
};
