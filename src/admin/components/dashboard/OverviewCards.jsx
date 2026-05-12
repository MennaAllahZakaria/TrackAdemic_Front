import OverviewCard
from "./OverviewCard";

function OverviewCards({
  overviewCards,
}) {
  return (
    <div
      className="
        grid grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4

        gap-6
      "
    >

      {overviewCards.map(
        (card, i) => (
          <OverviewCard
            key={i}
            {...card}
          />
        )
      )}

    </div>
  );
}

export default OverviewCards;