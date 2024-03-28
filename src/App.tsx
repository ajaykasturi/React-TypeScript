import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { CounterClass } from "./components/class/CounterClass";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Userc from "./components/context/Userc";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomButton } from "./components/html/Button";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Text } from "./components/ploymorphic/Text";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/Status";
import { Toast } from "./components/templateLiterals/Toast";
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
      <Input value={""} handleChange={(event) => console.log(event)} />
      <Container
        styles={{ border: "1px solid white", padding: "3rem", margin: "3rem" }}
      />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <Userc />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <CounterClass />

      <Private component={Profile} isLoggedIn={true} />

      <List
        items={["batman", "superman", "wonder woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[{ id: "a" }, { id: "c" }]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={2} isPositive={true} />
      <Toast position="center" />
      <CustomButton
        name={"hello"}
        variant="primary"
        onClick={() => console.log("hello")}
      >
        Primary Button
      </CustomButton>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="id" size="sm" color="primary">
        Label
      </Text>
    </>
  );
}
export default App;
