import './App.css';
import {selectSong} from '../actions';
import SongList from './SongList';

function App() {
  return (
    <div className="ui container grip">
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
      </div>
    </div>
  );
}

export default App;
