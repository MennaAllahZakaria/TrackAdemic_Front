import {
  useEffect,
  useState,
} from "react";

import {
  getTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} from "../services/adminService";

import TracksHero
from "../components/tracks/TracksHero";

import TracksStats
from "../components/tracks/TracksStats";

import TracksFilters
from "../components/tracks/TracksFilters";

import TracksGrid
from "../components/tracks/TracksGrid";

import TrackModal
from "../components/tracks/TrackModal";

import DeleteTrackModal
from "../components/tracks/DeleteTrackModal";

import TracksPagination
from "../components/tracks/TracksPagination";

import TracksLoader
from "../components/tracks/TracksLoader";

function TracksManagementPage() {
  const [loading, setLoading] =
    useState(true);

  const [tracks, setTracks] =
    useState([]);

  const [pagination, setPagination] =
    useState(null);

  const [stats, setStats] =
    useState(null);

  const [filters, setFilters] =
    useState({
      page: 1,
      limit: 9,
      keyword: "",
    });

  // ================= MODALS =================
  const [trackModalOpen,
    setTrackModalOpen] =
    useState(false);

  const [
    deleteModalOpen,
    setDeleteModalOpen,
  ] = useState(false);

  const [selectedTrack,
    setSelectedTrack] =
    useState(null);

  // ================= FETCH =================
  const fetchTracks =
    async () => {
      try {

        setLoading(true);
        const params = {
          page: filters.page,
          limit: filters.limit,
        };

        // search only if exists
        if (
          filters.keyword &&
          filters.keyword.trim()
        ) {
          params.keyword =
            filters.keyword;
        }

        const res = await getTracks(params);


        setTracks(
          res.data || []
        );

        setPagination(
          res.pagination
        );

        setStats(
          res.analytics
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {
    fetchTracks();
  }, [filters]);

  // ================= CREATE =================
  const handleCreateTrack =
    async (formData) => {
      try {

        await createTrack(
          formData
        );

        setTrackModalOpen(
          false
        );

        fetchTracks();

      } catch (err) {

        console.log(err);

      }
    };

  // ================= UPDATE =================
  const handleUpdateTrack =
    async (formData) => {
      try {

        await updateTrack(
          selectedTrack._id,
          formData
        );

        setTrackModalOpen(
          false
        );

        setSelectedTrack(
          null
        );

        fetchTracks();

      } catch (err) {

        console.log(err);

      }
    };

  // ================= DELETE =================
  const handleDeleteTrack =
    async () => {
      try {

        await deleteTrack(
          selectedTrack._id
        );

        setDeleteModalOpen(
          false
        );

        setSelectedTrack(
          null
        );

        fetchTracks();

      } catch (err) {

        console.log(err);

      }
    };

  // ================= OPEN CREATE =================
  const openCreateModal =
    () => {

      setSelectedTrack(
        null
      );

      setTrackModalOpen(
        true
      );
    };

  // ================= OPEN EDIT =================
  const openEditModal =
    (track) => {

      setSelectedTrack(
        track
      );

      setTrackModalOpen(
        true
      );
    };

  // ================= OPEN DELETE =================
  const openDeleteModal =
    (track) => {

      setSelectedTrack(
        track
      );

      setDeleteModalOpen(
        true
      );
    };

  // ================= LOADING =================
  if (loading) {
    return <TracksLoader />;
  }

  return (
    <div
      className="
        space-y-8
      "
    >

      {/* HERO */}
      <TracksHero />

      {/* STATS */}
      <TracksStats
        stats={stats}
      />

      {/* FILTERS */}
      <TracksFilters
        filters={filters}
        setFilters={setFilters}
        openCreateModal={
          openCreateModal
        }
      />

      {/* GRID */}
      <TracksGrid
        tracks={tracks}
        openEditModal={
          openEditModal
        }
        openDeleteModal={
          openDeleteModal
        }
      />

      {/* PAGINATION */}
      <TracksPagination
        filters={filters}
        setFilters={setFilters}
        pagination={pagination}
      />

      {/* CREATE / EDIT MODAL */}
      <TrackModal
        open={trackModalOpen}
        onClose={() => {
          setTrackModalOpen(
            false
          );

          setSelectedTrack(
            null
          );
        }}
        onSubmit={
          selectedTrack
            ? handleUpdateTrack
            : handleCreateTrack
        }
        initialData={
          selectedTrack
        }
      />

      {/* DELETE MODAL */}
      <DeleteTrackModal
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(
            false
          );

          setSelectedTrack(
            null
          );
        }}
        onConfirm={
          handleDeleteTrack
        }
        track={selectedTrack}
      />

    </div>
  );
}

export default TracksManagementPage;