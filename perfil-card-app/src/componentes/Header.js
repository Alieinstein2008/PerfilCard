export default function Header(props) {
  return (
    <header>
      <div>
        <img
          src={props.PerfilImageUrl}
          alt={props.PerfilImageAlt}
        />
        <h1>{props.PerfilTitle}</h1>
      </div>
    </header>
  );
}
