import './App.css';
import ChatBox from './ChatBox';
import Sidebar from './Sidebar';
import SidebarChat from './SidebarChat'
import Chat from './Chat'

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
