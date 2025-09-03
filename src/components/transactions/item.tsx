import type { Transaction as TransactionType } from "../../../types";
import { Avatar } from "./avatar";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import "./index.css";

type Props = {
  transaction: TransactionType;
};

export const Transaction = ({ transaction }: Props) => (
  <tr>
    <td>
      <div
        className="transaction__detail"
        role="group"
        aria-labelledby={`transaction-description-${transaction.id} transaction-category-${transaction.id}`}
      >
        <Avatar name={transaction.description} />
        <div className="transaction__description">
          <span id={`transaction-description-${transaction.id}`}>
            {transaction.description}
          </span>
          <span
            id={`transaction-category-${transaction.id}`}
            className="transaction__category"
          >
            {transaction.category}
          </span>
        </div>
      </div>
    </td>
    <td>
      <div>{formatDate(transaction.date)}</div>
    </td>
    <td className="transaction__amount">
      <div className="amount">
        {formatCurrency(
          transaction.amount.value,
          transaction.amount.currency_iso
        )}
      </div>
    </td>
  </tr>
);
