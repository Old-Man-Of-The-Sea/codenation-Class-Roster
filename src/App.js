import "./styles.css";

export default function App() {
  let Row1 = Person(
    "Mikkail",
    "Allen",
    "He/His",
    "Williamsburg Charter High School"
  );
  let Row2 = Person("Justin", "Apupalo", "He/His", "NYIT");
  let Row3 = Person("Chris", "B", "He/His", "OCA");
  let Row4 = Person("Joe", "Idk", "He/His");
  let Row5 = Person("Angel", "Idk", "He/His");
  // let Row2 = FavColor("");
  return (
    <div className="App">
      <h1>Codenation Class Roster</h1>
      {Row1} {Row2} {Row3} {Row4} {Row5}
    </div>
  );
}

function Person(First, Last, Pronouns, School) {
  return (
    <div className="Person">
      <span class="First">{First}</span>
      &nbsp;
      <span class="Last">{Last}</span>
      &nbsp;
      <span class="Pronouns">{Pronouns}</span>
      &nbsp;
      <span class="School">{School}</span>
    </div>
  );
}
