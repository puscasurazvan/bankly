import "./index.css";

export const Loading = ({
  displayText = "Loading your transaction history...",
}: {
  displayText?: string;
}) => (
  <div className="loading" aria-busy="true" aria-live="polite">
    {displayText}
    <span className="loader" aria-label="Loading" />
  </div>
);
