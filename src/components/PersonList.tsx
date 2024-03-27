type PersonProp = {
  firstName: string;
  lastName: string;
};
type PersonListType = {
  nameList: PersonProp[];
};

export default function PersonList(props: PersonListType) {
  return (
    <div>
      {props.nameList.map((name) => (
        <h2 key={name.firstName}>
          {name.firstName} {name.lastName}
        </h2>
      ))}
    </div>
  );
}
