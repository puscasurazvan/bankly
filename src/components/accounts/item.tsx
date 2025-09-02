import type { Account } from "../../../types";
import "./index.css";
import { formatCurrency } from "../../utils/formatCurrency";

type Props = {
  account: Account;
};

export const AccountItem = ({ account }: Props) => {
  return (
    <div
      className="account"
      role="region"
      aria-label={`Account balance in ${account.balance.amount.currency}`}
    >
      <div className="total" id={`account-total-${account.account_id}`}>
        Total {account.balance.amount.currency}
      </div>
      <strong aria-labelledby={`account-total-${account.account_id}`}>
        {formatCurrency(
          account.balance.amount.value,
          account.balance.amount.currency
        )}
      </strong>
    </div>
  );
};
