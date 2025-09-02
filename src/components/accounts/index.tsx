import { Account } from "../../../types";
import { useFetch } from "../../hooks/useFetch";
import { AccountItem } from "./item";
import { Loading } from "../loading";
import { Error } from "../error";

import "./index.css";

export const Accounts = () => {
  const {
    data: accounts,
    loading,
    error,
  } = useFetch<Account[]>("/api/accounts");

  if (loading) {
    return <Loading displayText="Loading your accounts..." />;
  }

  if (error) {
    return <Error displayText="Error loading your accounts..." />;
  }

  if (!accounts) return;

  return (
    <>
      <h1 className="align-left" id="accounts-heading">
        Your accounts
      </h1>
      <div
        className="accounts"
        role="region"
        aria-labelledby="accounts-heading"
      >
        {accounts?.map((account) => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </div>
    </>
  );
};
