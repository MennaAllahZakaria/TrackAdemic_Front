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
        md:grid-cols-2
        2xl:grid-cols-3

        gap-6
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