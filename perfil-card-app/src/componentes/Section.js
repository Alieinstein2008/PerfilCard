export default function Section(props) {
    return (
      <section>
        <div>
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
          <ul className={props.classe}>{props.children}</ul>
        </div>
      </section>
    );
  }
  