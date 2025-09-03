import { Accounts } from "../../components/accounts";
import { TransactionHistory } from "../../components/transactions";
import "./index.css";

export const Home = () => (
  <div className="home">
    <Accounts />
    <TransactionHistory />
  </div>
);
