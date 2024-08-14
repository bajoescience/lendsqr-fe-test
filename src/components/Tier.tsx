import filledStar from "../img/filled-star.png";
import unfilledStar from "../img/unfilled-star.png";
import { Ttier } from "../types";

type tTier = {
  tier: Ttier;
};

const Tier = ({ tier }: tTier) => {
  switch (tier) {
    case 1:
      return (
        <>
          <div>
            <img src={filledStar} alt="filledstar" />
            <img src={unfilledStar} alt="unfilledstar" />
            <img src={unfilledStar} alt="unfilledstar" />
          </div>
        </>
      );
      break;
    case 2:
      return (
        <>
          <div>
            <img src={filledStar} alt="filledstar" />
            <img src={filledStar} alt="filledstar" />
            <img src={unfilledStar} alt="unfilledstar" />
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div>
            <img src={filledStar} alt="filledstar" />
            <img src={filledStar} alt="filledstar" />
            <img src={filledStar} alt="filledstar" />
          </div>
        </>
      );
  }
};

export default Tier;
