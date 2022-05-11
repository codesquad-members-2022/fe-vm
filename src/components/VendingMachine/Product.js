export default function Product({ item }) {
  const { name, emoji, price } = item;
  return (
    <div>
      <div>{emoji}</div>
      <div>{price}</div>
    </div>
  );
}
