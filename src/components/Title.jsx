// todo destructura, deja de repetir props.
// todo el title deberia de ser el children y no una prop title
export const Title = props => {
  return <h2 className={props.designTitle}>{props.title}</h2>;
};
