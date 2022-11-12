export const Button = ({ typeButton, designButton, onClick, children }) => {
  return (
    <button type={typeButton} className={designButton} onClick={onClick}>
      {children}
    </button>
  );
};
