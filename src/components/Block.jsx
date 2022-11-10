// todo destructura para que no estes duplicando props.
// todo si no hay un evento no deberia de tener un onClick, todos tu div ahora tienen ese evento aunque no le pases una funcion

export const Block = props => {
  return (
    <div className={props.designBlock} onClick={props.eventListener}>
      {props.children}
    </div>
  );
};
