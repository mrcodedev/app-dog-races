import { useEffect, useState } from "react";
import Select from "../../components/Select/Select";
import ImageDogs from "../../components/ImageDogs/ImageDogs";
import { getRaces, getSelectedRace } from "../../services/DogRaces";
import { capitalizeFirstLetter } from "../../utils/transform-text";

const Home = () => {
  const [raceList, setRaceList] = useState();
  const [selectedRace, setSelectedRace] = useState("none");
  const [imageDogs, setImageDogs] = useState([]);

  useEffect(() => {
    const resultListRaces = async () => {
      const emptyValue = {
        key: 0,
        display: "Ninguno",
        value: "none",
        selected: false,
      };

      const dogRaces = await getRaces();
      const listRaces = Object.getOwnPropertyNames(dogRaces.message);
      const selectOptions = listRaces.map((race, index) => {
        const raceCapitalized = capitalizeFirstLetter(race);
        return {
          key: ++index,
          display: raceCapitalized,
          value: race,
          selected: false,
        };
      });

      selectOptions.unshift(emptyValue);

      setRaceList(selectOptions);
    };

    const resultRaceImages = async (race) => {
      const dogImages = await getSelectedRace(race);
      setImageDogs(dogImages.message);
    };

    if (!raceList) {
      resultListRaces();
    }

    if (selectedRace !== "none") {
      resultRaceImages(selectedRace);
    }
  }, [selectedRace, raceList]);

  return (
    <div>
      <Select
        name="dog-breed"
        selectOptions={raceList}
        onChangeSelect={(data) => setSelectedRace(data)}
      />
      <ImageDogs imageDogs={imageDogs} limit="8" />
    </div>
  );
};

export default Home;
