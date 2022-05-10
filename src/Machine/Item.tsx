export default function Item(props: { item: object }): JSX.Element {
  const [image, text, price] = Object.values(props.item);

  return (
    <>
      <div>
        <div>
          <img src={image} alt={text} />
        </div>
        <div>
          <span>{text}</span>
          <span>{price}</span>
        </div>
      </div>
    </>
  );
}
