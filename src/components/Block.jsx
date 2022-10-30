export const Block = props => {
  return (
    <div className={props.designBlock} onClick={props.eventListener}>
      {props.children}
    </div>
  );
};
