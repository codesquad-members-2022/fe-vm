export default function Header(props: { texts: string[] }): JSX.Element {
  return (
    <>
      <div>{props.texts.join(' ')}</div>
    </>
  );
}
