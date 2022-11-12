// todo si no hay un evento no deberia de tener un onClick, todos tu div ahora tienen ese evento aunque no le pases una funcion

export const Block = ({ designBlock, onClick, children }) => {
  return (
    <div className={designBlock} onClick={onClick}>
      {children}
    </div>
  );
};
