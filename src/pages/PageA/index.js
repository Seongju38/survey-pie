import { Link } from 'react-router-dom';

function PageA() {
  return (
    <>
      <div>PageA</div>
      <div>
        <a href="/2">Move to PageB by a tag</a>
        <br />
        <Link to="/2">Move to PageB</Link>
      </div>
    </>
  );
}

export default PageA;
