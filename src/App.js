import "./styles.css";

export default function App() {
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
  let Row3 = Person("Chris", "B", [One], "OCA", [Date], [B], [I], "FISH");
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

  // let Row5 = "";
  return (
    <div className="App">
      <h1>Codenation Class Roster</h1>
      {Row1} {Row2} {Row3}
      {/* {3.2} */} {Row4} {Row5}
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
