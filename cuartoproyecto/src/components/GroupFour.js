import {Link} from 'wouter'

function GroupeFour() {

  return (
    <div>
      <div className='main'>
      <Link href='/'>
        <button className='btn-back'>Bandas</button>
      </Link>
        <h2>Pearl-Jam</h2>
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

export default GroupeFour;