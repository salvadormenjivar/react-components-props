import "./App.css";
import ContactList from "./components/ContactList";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div>
      <Avatar img="https://media.licdn.com/dms/image/v2/D4E03AQF1209wRgnGog/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731618995424?e=1741824000&v=beta&t=zQ51fPgDBWTaiK89C5SnqUeKDL_6Yu6D5x41IIY9GTk"/>
      <h1>Salvador Peña</h1>
      <h1 className="heading">My Contacts</h1>
      <ContactList />
    </div>
  )
}

export default App
