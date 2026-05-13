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

function NotificationsPage() {
  const [loading, setLoading] =
    useState(true);

  const [notifications,
    setNotifications] =
    useState([]);

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
      keyword: "",
    });

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
            res.analytics.total || 0,

          today:
            res.analytics.today || 0,

          unread:
            res.analytics.unread || 0,
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

        await createNotification(
          formData
        );

        setModalOpen(false);

        fetchNotifications();

      } catch (err) {

        console.log(err);

      }
    };

  // ================= DELETE =================
  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete notification?"
        );

      if (!confirmDelete)
        return;

      try {

        await deleteNotification(
          id
        );

        fetchNotifications();

      } catch (err) {

        console.log(err);

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

      <NotificationModal
        open={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onSubmit={
          handleCreate
        }
      />

    </div>
  );
}

export default NotificationsPage;