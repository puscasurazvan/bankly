import { Account } from "../../../types";
import { useFetch } from "../../hooks/useFetch";
import { AccountItem } from "./item";
import { Loading } from "../loading";

import "./index.css";

export const Accounts = () => {
  const { data: accounts, loading } = useFetch<Account[]>("/api/accounts");

  if (loading) {
    return <Loading />;
  }

  if (!accounts) return;

  return (
    <>
      <h1 className="align-left">Your accounts</h1>
      <div className="accounts">
        {accounts?.map((account) => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </div>
    </>
  );
};
