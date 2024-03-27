import "./App.css";
import { Button } from "./components/Button";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";
function App() {
  const personName = {
    firstName: "Ajay",
    lastName: "Kasturi",
  };
  const personList = [
    {
      firstName: "Ajay",
      lastName: "Kasturi",
    },
    {
      firstName: "Rakesh",
      lastName: " Bandi",
    },
    {
      firstName: "Srikanth",
      lastName: "Srikonda",
    },
  ];
  return (
    <>
      <Greet name={"Ajay"} messageCount={20} isLoggedIn={true} />
      <Greet name={"Ajay"} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList nameList={personList} />
      <Status status={"success"} />
      <Heading>Placeholder for children components</Heading>
      <Oscar>
        <Heading>Oscar Goes To Natu Natu Song...</Heading>
      </Oscar>
      <Button
        handleClick={(event) => console.log("button is clicked", event)}
      />
    </>
  );
}
export default App;
