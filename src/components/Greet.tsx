type Prop = {
  name: string;
  // ?: is optional prop
  messageCount?: number;
  isLoggedIn: boolean;
};
function Greet({ name, messageCount = 0, isLoggedIn }: Prop) {
  return (
    <div>
      {isLoggedIn
        ? `Welcome ${name} you have ${messageCount} unread messages...`
        : "Welcome Guest"}
    </div>
  );
}
export default Greet;
