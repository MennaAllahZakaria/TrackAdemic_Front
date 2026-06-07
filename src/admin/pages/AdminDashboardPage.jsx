import {
  useEffect,
  useState,
} from "react";

import {
  getDashboardStats,
} from "../services/adminService";

import DashboardHero
from "../components/dashboard/DashboardHero";

import DashboardLoader
from "../components/dashboard/DashboardLoader";

import OverviewCards
from "../components/dashboard/OverviewCards";

import ActivityChart
from "../components/dashboard/ActivityChart";

import UsersPieChart
from "../components/dashboard/UsersPieChart";

import TopStreaksCard
from "../components/dashboard/TopStreaksCard";

import RecentUsersCard
from "../components/dashboard/RecentUsersCard";

import CreateUserModal
from "../components/users/CreateUserModal";

import {
  createUserByAdmin,
} from "../services/adminService";

function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [createUserModal,setCreateUserModal] = useState(false);
  const [createUserLoading,setCreateUserLoading] = useState(false);

const fetchStats =
  async () => {

    try {

      setLoading(true);

      const data =
        await getDashboardStats();

      setStats(data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }
};

useEffect(() => {
  fetchStats();
}, []);

const handleCreateUser =
  async (formData) => {

    try {

      setCreateUserLoading(true);

      await createUserByAdmin(
        formData
      );

      await fetchStats();

      setCreateUserModal(false);

    } catch (err) {

      console.log(err);

    } finally {

      setCreateUserLoading(false);

    }
};

  if (loading) {
    return <DashboardLoader />;
  }

  const overviewCards = [
    {
      title: "Total Users",
      value:
        stats?.users?.total || 0,
      icon: "ri-team-line",
      bg: "from-cyan-500 to-blue-600",
    },
    {
      title: "Active Users",
      value:
        stats?.users?.active || 0,
      icon: "ri-user-follow-line",
      bg: "from-emerald-500 to-green-600",
    },
    {
      title: "Tracks",
      value:
        stats?.content?.tracks || 0,
      icon: "ri-book-open-line",
      bg: "from-violet-500 to-purple-600",
    },
    {
      title: "Quiz Attempts",
      value:
        stats?.activity
          ?.quizAttempts || 0,
      icon: "ri-file-list-3-line",
      bg: "from-orange-500 to-red-500",
    },
  ];

  const activityData = [
    {
      name: "Active",
      value:
        stats?.users?.active || 0,
    },
    {
      name: "Inactive",
      value:
        stats?.users
          ?.inactive || 0,
    },
    {
      name: "Banned",
      value:
        stats?.users?.banned || 0,
    },
  ];

  const chartData = [
    {
      name: "Quiz",
      value:
        stats?.activity
          ?.quizAttempts || 0,
    },
    {
      name: "Contacts",
      value:
        stats?.activity
          ?.contactMessages || 0,
    },
    {
      name: "Notifications",
      value:
        stats?.activity
          ?.notifications || 0,
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">

      <DashboardHero />

      <OverviewCards
        overviewCards={
          overviewCards
        }
      />

      <div
        className="
          grid grid-cols-1
          lg:grid-cols-[1.5fr_.8fr]

          gap-4
          sm:gap-6
        "
      >

        <ActivityChart
          chartData={chartData}
        />

        <UsersPieChart
          activityData={
            activityData
          }
        />

      </div>

      <div
        className="
          grid grid-cols-1
          lg:grid-cols-2

          gap-4
          sm:gap-6
        "
      >

        <TopStreaksCard
          users={
            stats?.topStreaks
          }
        />

        <RecentUsersCard
          users={
            stats?.recentUsers
          }
          setCreateUserModal={
            setCreateUserModal
          }
        />

      </div>
      <CreateUserModal
        open={createUserModal}
        onClose={() =>
          setCreateUserModal(false)
        }
        onSubmit={handleCreateUser}
        loading={createUserLoading}
      />

    </div>
  );
}

export default AdminDashboardPage;