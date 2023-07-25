const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "50" }}>
      <div className="card-header border border-success text-center">
        {props.header && <h2 className="card-title">{props.header}</h2>}
      </div>
      <div className="card-body border border-success">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <h5 className="card-text text-center">{props.text}</h5>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
