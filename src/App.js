import "./styles.css";

export default function App() {
  //
  let One = "He/Him";
  let Two = "She/Hers";
  let Date = "2022";
  let B = "Blue";
  let T = "TikTok";
  let I = "Insta";
  let D = "Dog";
  let C = "Cat";
  //

  let people = [
    {
      firstName: "Mikkail",
      lastname: "Allen",
      pronouns: [One],
      school: "Williamsburg Charter High School",
      gy: [Date],
      fc: [B],
      tori: [T],
      dogcat: [D] //0
    },
    {
      firstName: "Justin",
      lastname: "Apupalo",
      pronouns: [One],
      school: "NYIT",
      gy: "2025",
      fc: [B],
      tori: [I],
      dogcat: "Rooster"
    }, //1
    {
      firstName: "Christopher",
      lastname: "Bonifacio",
      pronouns: [One],
      school: "OCA",
      gy: [Date],
      fc: [B],
      tori: [I], //2
      dogcat: "FISH"
    },
    {
      firstName: "Angel",
      lastname: "Campoverde",
      pronouns: [One],
      school: "Cristo Rey High School",
      gy: [Date],
      fc: "Purple",
      tori: [I], //3
      dogcat: [D]
    },
    {
      firstName: "Mahdiya",
      lastname: "Chowdhury",
      pronouns: [Two],
      school: "TYWLS",
      gy: "2023",
      fc: "Pink",
      tori: [T], //4
      dogcat: [C]
    },
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
    ["Claudia", "Luna-Marcelino", [Two], "P-TECH", [Date], "", "", [C]], //12
    ["Wana", "Marzia", [Two], "P-TECH", [Date], ["Black"], "", [C]], //13
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
    ["Angel", "Smythe", [One]], //22
    ["Imani", "Taylor", [Two], "P-tech", [Date], "Pink", [T], [C]], //23
    ["Issac", "Teoh", [One], "Queens Technical HS", [Date], [I], [C]], //24
    ["David", "Vital"[One]], //25
    ["Desean", "Blackburn", [One], "", [Date], "green", [I], [C]], //26
    [
      "Chinaza",
      "Onwukanjo",
      [Two],
      "Frederick Douglass Academy",
      "2023",
      "Purple",
      "Youtube",
      [D]
    ] //27
  ];

  let List = people.map(function (person) {
    // console.log("im here");
    // console.log(person);
    // TODO
    return (
      <span>
        &nbsp;{person.firstName}&nbsp;{person.lastName}&nbsp;{person.pronouns}
        &nbsp;{person.school}
        &nbsp;{person.gy}&nbsp;{person.fc}&nbsp;{person.tori}&nbsp;
        {person.dogcat}
        {/* &nbsp;{person[0]}&nbsp;{person[1]}&nbsp;{person[2]}&nbsp;{person[3]}
        &nbsp;{person[4]}&nbsp;{person[5]}&nbsp;{person[6]}&nbsp;{person[7]} */}
      </span>
    );
  });

  return (
    <span className="App">
      <h1>Codenation Class Roster</h1>
      {List}
    </span>
  );
}

// let array = [];
// for (let name of Person) {
//   let First = name[0];
//   let Last = name[1];
//   let Pronouns = PR[2];
// };

// function Person(First, Last, Pronouns, School, GY, FC, TorI, DogCat) {
//   return (
//     <div className="Person">
//       <span class="First">{First}</span>
//       &nbsp;
//       <span class="Last">{Last}</span>
//       &nbsp;
//       <span class="Pronouns">{Pronouns}</span>
//       &nbsp;
//       <span class="School">{School}</span>
//       &nbsp;
//       <span class="Gradution Year">{GY}</span>
//       &nbsp;
//       <span class="Favorite Color">{FC}</span>
//       &nbsp;
//       <span class="Tiktok or Insta">{TorI}</span>
//       &nbsp;
//       <span class="Dogs or Cats">{DogCat}</span>
//     </div>
//   );
// }
