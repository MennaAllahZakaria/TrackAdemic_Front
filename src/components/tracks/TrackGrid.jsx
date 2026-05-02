import TrackCard from "./TrackCard";

function TrackGrid({ tracks }) {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">
      {tracks.map((track) => (
        <TrackCard key={track._id} track={track} />
      ))}
    </div>
  );
}

export default TrackGrid;