import './App.css';
import {selectSong} from '../actions';
import SongList from './SongList';

function App() {
  return (
    <div className="App">
      <SongList />
    </div>
  );
}

export default App;
