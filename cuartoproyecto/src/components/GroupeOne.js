import {Link} from 'wouter'

function GroupeOne() {

  return (
    <div>
      <div className='main'>
      <Link href='/'>
        <button className='btn-back'>Home</button>
      </Link>
        <h2>Alice in Chains</h2>
        <p>
          blabla canciones:
        </p>
        <ul>
          <li> cancion1 </li>
          <li> cancion2 </li>
          <li> cancion2 </li>
          <li> cancion2 </li>
        </ul>
      </div >
    </div>
  );
}

export default GroupeOne;