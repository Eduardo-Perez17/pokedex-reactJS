export const Input = ({ typeInput, designInput, valueInput, onChange }) => {
  return <input type={typeInput} className={designInput} value={valueInput} onChange={onChange} />;
};
