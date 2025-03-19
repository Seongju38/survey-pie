import { Link } from 'react-router-dom';

function PageB() {
  return (
    <>
      <div>PageB</div>
      <div>
        <a href="/">Move to PageA by a tag</a>
        <br />
        <Link to="/">Move to PageA</Link>
      </div>
    </>
  );
}

export default PageB;
