import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <h1>Home</h1>
      <h3>Monkey</h3>
      <Link to={"/monkey-create"}>
        <p>Add new monkey</p>
      </Link>
      <Link to={"/monkey-viewall"}>
        <p>Monkey list</p>
      </Link>
    </>
  );
}
