import React from "react";

function App({ contract }) {
  const [greeting, setGreeting] = React.useState("");
  const [newGreeting, setNewGreeting] = React.useState("");
  React.useEffect(() => {
    if (contract) {
      contract.greeting().then(setGreeting);
    }
  }, [contract]);
  const updateGreeting = (event) => {
    event.preventDefault();
    contract.setGreeting(newGreeting).then(() => setGreeting(newGreeting));
  };
  return (
    <div>
      <header>Ethereum greeting: {greeting}</header>

      <form onSubmit={updateGreeting}>
        <label>
          New greeting:
          <input
            type="text"
            value={newGreeting}
            onChange={({ target }) => setNewGreeting(target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
