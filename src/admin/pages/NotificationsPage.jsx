import {
  useEffect,
  useState,
} from "react";

import {
  getNotifications,
  createNotification,
  deleteNotification,
} from "../services/adminService";

import NotificationsHero
from "../components/notifications/NotificationsHero";

import NotificationsStats
from "../components/notifications/NotificationsStats";

import NotificationsFilters
from "../components/notifications/NotificationsFilters";

import NotificationsList
from "../components/notifications/NotificationsList";

import NotificationModal
from "../components/notifications/NotificationModal";

import NotificationsPagination
from "../components/notifications/NotificationsPagination";

import NotificationsLoader
from "../components/notifications/NotificationsLoader";

import NotificationConfirmModal
from "../components/notifications/NotificationConfirmModal";

function NotificationsPage() {

  const [loading, setLoading] =
    useState(true);

  const [
    createLoading,
    setCreateLoading,
  ] = useState(false);

  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [pagination,
    setPagination] =
    useState(null);

  const [stats, setStats] =
    useState(null);

  const [modalOpen,
    setModalOpen] =
    useState(false);

  const [filters,
    setFilters] =
    useState({
      page: 1,
      limit: 9,
    });

  const [
    deleteModal,
    setDeleteModal,
  ] = useState({
    open: false,
    id: null,
  });

  const [
    deleteLoading,
    setDeleteLoading,
  ] = useState(false);

  // ================= FETCH =================
  const fetchNotifications =
    async () => {

      try {

        setLoading(true);

        const res =
          await getNotifications(
            filters
          );

        setNotifications(
          res.data || []
        );

        setPagination(
          res.pagination
        );

        setStats({
          total:
            res.analytics?.total || 0,

          today:
            res.analytics?.today || 0,

          unread:
            res.analytics?.unread || 0,
        });

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {
    fetchNotifications();
  }, [filters]);

  // ================= CREATE =================
  const handleCreate =
    async (formData) => {

      try {

        setCreateLoading(true);

        await createNotification(
          formData
        );

        await fetchNotifications();

        setModalOpen(false);

      } catch (err) {

        console.log(err);

      } finally {

        setCreateLoading(false);

      }
    };

  // ================= OPEN DELETE MODAL =================
  const handleDelete =
    (id) => {

      setDeleteModal({
        open: true,
        id,
      });

    };

  // ================= CONFIRM DELETE =================
  const confirmDelete =
    async () => {

      try {

        setDeleteLoading(true);

        await deleteNotification(
          deleteModal.id
        );

        await fetchNotifications();

        setDeleteModal({
          open: false,
          id: null,
        });

      } catch (err) {

        console.log(err);

      } finally {

        setDeleteLoading(false);

      }
    };

  // ================= LOADING =================
  if (loading) {
    return (
      <NotificationsLoader />
    );
  }

  return (

    <div
      className="
        space-y-8
      "
    >

      <NotificationsHero />

      <NotificationsStats
        stats={stats}
      />

      <NotificationsFilters
        filters={filters}
        setFilters={setFilters}
        openModal={() =>
          setModalOpen(true)
        }
      />

      <NotificationsList
        notifications={
          notifications
        }
        handleDelete={
          handleDelete
        }
      />

      <NotificationsPagination
        filters={filters}
        setFilters={setFilters}
        pagination={pagination}
      />

      {/* CREATE MODAL */}
      <NotificationModal
        open={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onSubmit={
          handleCreate
        }
        loading={
          createLoading
        }
      />

      {/* DELETE MODAL */}
      <NotificationConfirmModal
        open={deleteModal.open}
        title="Delete Notification"
        message="Are you sure you want to delete this notification?"
        confirmText="Delete"
        cancelText="Cancel"
        loading={deleteLoading}
        onConfirm={
          confirmDelete
        }
        onClose={() =>
          setDeleteModal({
            open: false,
            id: null,
          })
        }
      />

    </div>
  );
}

export default NotificationsPage;