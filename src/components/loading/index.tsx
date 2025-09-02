import "./index.css";

export const Loading = ({
  displayText = "Loading your transaction history...",
}: {
  displayText?: string;
}) => (
  <div className="loading">
    {displayText}
    <span className="loader"></span>
  </div>
);
