import "./styles.css";

export default function App() {
  //did this cause im lazy... and dont know how it works
  let One = "He/Him";
  let Two = "She/Hers";
  let Date = "2020";
  let B = "Blue";
  let T = "TikTok";
  let I = "Insta";
  let D = "Dog";
  let C = "Cat";

  let Row1 = Person(
    "Mikkail",
    "Allen",
    "He/His",
    "Williamsburg Charter High School",
    [B],
    [T],
    [D]
  );
  let Row2 = Person(
    "Justin",
    "Apupalo",
    [One],
    "NYIT",
    "2025",
    [B],
    [I],
    "Rooster"
  );
  let Row3 = Person(
    "Christopher",
    "Bonifacio",
    [One],
    "OCA",
    [Date],
    [B],
    [I],
    "FISH"
  );
  //let Row3.2 = Person("Joe", "Idk", "He/His");
  let Row4 = Person(
    "Angel",
    "Campoverde",
    [One],
    "Cristo Rey High School",
    [Date],
    "Purple",
    [I],
    [D]
  );
  let Row5 = Person(
    "Mahdiya",
    "Chowdhury",
    [Two],
    "TYWLS",
    "2023",
    "Pink",
    [T],
    [C]
  );
  let Row6 = Person("Diego", "Cruz", [One], "Macalester", "2026", "Red", "I");
  let Row7 = Person("Heber", "Cruz, Hernandez", [One]);
  let Row8 = Person("Yonatan", "De La Mora", [One]);
  let Row9 = Person(
    "Denny",
    "Fernandez",
    [One],
    "Williamsburg Charter High School",
    [Date],
    [B],
    [T],
    [D]
  );
  let Row10 = Person(
    "Athziri",
    "Garcia",
    "Two",
    "Cristo Rey ",
    [Date],
    [B],
    [I],
    [D]
  );
  let Row11 = Person("Yasir", "Hirsi", [One]);
  // let Row5 = Person("");
  return (
    <div className="App">
      <h1>Codenation Class Roster</h1>
      {Row1} {Row2} {Row3}
      {/* {3.2} */} {Row4} {Row5}
      {Row6} {Row7} {Row8}
      {Row9} {Row10} {Row11}
    </div>
  );
}
// function identify(idk) {
//   let it = "2022";
// }

function Person(First, Last, Pronouns, School, GY, FC, TorI, DogCat) {
  return (
    <div className="Person">
      <span class="First">{First}</span>
      &nbsp;
      <span class="Last">{Last}</span>
      &nbsp;
      <span class="Pronouns">{Pronouns}</span>
      &nbsp;
      <span class="School">{School}</span>
      &nbsp;
      <span class="Gradution Year">{GY}</span>
      &nbsp;
      <span class="Favorite Color">{FC}</span>
      &nbsp;
      <span class="Tiktok or Insta">{TorI}</span>
      &nbsp;
      <span class="Dogs or Cats">{DogCat}</span>
    </div>
  );
}
