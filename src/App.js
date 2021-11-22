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

  // let Row0 = Person(
  //   "Mikkail",
  //   "Allen",
  //   "He/His",
  //   "Williamsburg Charter High School",
  //   [B],
  //   [T],
  //   [D]
  // );
  // let Row1 = Person(
  //   "Justin",
  //   "Apupalo",
  //   [One],
  //   "NYIT",
  //   "2025",
  //   [B],
  //   [I],
  //   "Rooster"
  // );
  // let Row2 = Person(
  //   "Christopher",
  //   "Bonifacio",
  //   [One],
  //   "OCA",
  //   [Date],
  //   [B],
  //   [I],
  //   "FISH"
  // );
  // //let Row3.2 = Person("Joe", "Idk", "He/His");
  // let Row3 = Person(
  //   "Angel",
  //   "Campoverde",
  //   [One],
  //   "Cristo Rey High School",
  //   [Date],
  //   "Purple",
  //   [I],
  //   [D]
  // );
  // let Row4 = Person(
  //   "Mahdiya",
  //   "Chowdhury",
  //   [Two],
  //   "TYWLS",
  //   "2023",
  //   "Pink",
  //   [T],
  //   [C]
  // );
  // let Row5 = Person("Diego", "Cruz", [One], "Macalester", "2026", "Red", "I");
  // let Row6 = Person("Heber", "Cruz, Hernandez", [One]);
  // let Row7 = Person("Yonatan", "De La Mora", [One]);
  // let Row8 = Person(
  //   "Denny",
  //   "Fernandez",
  //   [One],
  //   "Williamsburg Charter High School",
  //   [Date],
  //   [B],
  //   [T],
  //   [D]
  // );
  // let Row9 = Person(
  //   "Athziri",
  //   "Garcia",
  //   "Two",
  //   "Cristo Rey ",
  //   [Date],
  //   [B],
  //   [I],
  //   [D]
  // );
  // let Row10 = Person("Yasir", "Hirsi", [One]);
  // // let Row5 = Person("");

  let people = [
    [
      "Mikkail",
      "Allen",
      "He/His",
      "Williamsburg Charter High School",
      [B],
      [T],
      [D] //0
    ][("Justin", "Apupalo", [One], "NYIT", "2025", [B], [I], "Rooster")], //1
    [
      "Christopher",
      "Bonifacio",
      [One],
      "OCA",
      [Date],
      [B],
      [I], //2
      "FISH"
    ],

    [
      "Angel",
      "Campoverde",
      [One],
      "Cristo Rey High School",
      [Date],
      "Purple",
      [I], //3
      [D]
    ],
    [
      "Mahdiya",
      "Chowdhury",
      [Two],
      "TYWLS",
      "2023",
      "Pink",
      [T], //4
      [C]
    ],
    ["Diego", "Cruz", [One], "Macalester", "2026", "Red", "I"], //5
    [
      "Denny",
      "Fernandez",
      [One],
      "Williamsburg Charter High School",
      [Date],
      [B],
      [T],
      [D]
    ], //8
    ["Athziri", "Garcia", "Two", "Cristo Rey ", [Date], [B], [I], [D]], //9
    ["Yasir", "Hirsi", [One], "Mather High School", [Date], ["Red"], [I], [D]], //10
    ["Francelys", "Lomeli", [Two], "Lindblom", [Date], ["Yellow"], [T], [D]], //11
    ["Claudia", "Luna-Marcelino", [Two], "P-TECH", [Date], [""], [""], [C]], //12
    ["Wana", "Marzia", [Two], "P-TECH", [Date], ["Black"], [""], [C]], //13
    ["Lilly", "Minchala", [Two], "HHSLT", [Date], ["Purple"], [I], ["Rats"]], //14
    [
      "Abdulwahab",
      "Murshed",
      [One],
      "Brooklyn College",
      ["2025"],
      [B],
      [T],
      [D]
    ], //15
    [
      "Abdulwahab",
      "Murshed",
      [One],
      "Brooklyn College",
      ["2025"],
      [B],
      [T],
      [D] //16
    ][
      ("Andy",
      "Rincon",
      [One],
      "Uncommon Leadership Charter HS",
      [Date],
      ["Green"],
      [I],
      [C]) //17
    ],
    ["Eric", "Salazar", [One], "WCHS", [Date], [B], [T], [C]], //18
    ["Alejandro", "Sanchez", [One], "UIC", ["2025"], ["Black"], [I], ["Fish"]], //19
    ["Itzel", "Sanchez", [Two], "Westinghouse ", [Date], ["purple"], [T], [C]] //20
  ];

  //   return (
  //     <div className="App">
  //       <h1>Codenation Class Roster</h1>
  //       {Row0} {Row1} {Row2}
  //       {/* {3.2} */} {Row3} {Row4}
  //       {Row5} {Row6} {Row7}
  //       {Row8} {Row9} {Row10}
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <h1>Codenation Class Roster</h1>
      {people}
    </div>
  );
}

// let array = []
// for ( let name of Person){
//   let First = name[0];
//   let Last = name[1];
// }

// Element.push

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
