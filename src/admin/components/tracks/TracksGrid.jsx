import TrackCard
from "./TrackCard";

function TracksGrid({
  tracks,
  openEditModal,
  openDeleteModal,
}) {
  return (
    <div
      className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3

        gap-3
        sm:gap-4
        lg:gap-6
      "
    >

      {tracks.map((track) => (
        <TrackCard
          key={track._id}
          track={track}
          openEditModal={
            openEditModal
          }
          openDeleteModal={
            openDeleteModal
          }
        />
      ))}

    </div>
  );
}

export default TracksGrid;
