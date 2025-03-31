export default function ItemLista({ url, imageUrl, imageAlt }) {
    return (
      <li>
        <a target="_blank" rel="noreferrer" href={url}>
          <img src={imageUrl} alt={imageAlt} />
        </a>
      </li>
    );
  }
  