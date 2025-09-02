import "./index.css";

export const Error = ({
  displayText = "Error loading your transaction history.",
}: {
  displayText?: string;
}) => (
  <div className="error" role="alert" aria-live="assertive">
    {displayText} ⚠️
  </div>
);
