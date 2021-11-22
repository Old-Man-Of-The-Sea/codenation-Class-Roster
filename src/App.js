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
  //

  let people = [
    [
      "Mikkail",
      "Allen",
      "He/His",
      "Williamsburg Charter High School",
      [B],
      [T],
      [D] //0
    ],
    [("Justin", "Apupalo", [One], "NYIT", "2025", [B], [I], "Rooster")], //1
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
    ],
    [
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
    ["Itzel", "Sanchez", [Two], "Westinghouse ", [Date], ["purple"], [T], [C]], //20
    [
      "Anton",
      "Schuster",
      [One],
      "Latin School of Chicago ",
      ["2023"],
      ["Orange"]
    ], //21
    ["Angel", "Smythe", [One]] //22
  ];

  let List = people.map(function (person) {
    console.log("im here");
    console.log(person);
    // TODO
    return (
      <span>
        {person[0]} &nbsp; {person[1]} &nbsp; {person[2]}&nbsp; {person[3]}
        &nbsp;{person[4]}&nbsp;{person[5]}&nbsp;{person[6]}&nbsp;{person[7]}
      </span>
    );
  });

  return (
    <div className="App">
      <h1>Codenation Class Roster</h1>
      {List}
    </div>
  );
}

// let array = [];
// for (let name of Person) {
//   let First = name[0];
//   let Last = name[1];
//   let Pronouns = PR[2];
// };

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
