import {
  useEffect,
  useState,
} from "react";

import {
  getUsers,
  updateUserStatus,
  updateUserRole,
  deleteUser,
} from "../services/adminService";

import UsersHero
from "../components/users/UsersHero";

import UsersFilters
from "../components/users/UsersFilters";

import UsersTable
from "../components/users/UsersTable";

import UsersPagination
from "../components/users/UsersPagination";

import UsersLoader
from "../components/users/UsersLoader";

function UsersManagementPage() {
  const [loading, setLoading] =
    useState(true);

  const [users, setUsers] =
    useState([]);

  const [pagination, setPagination] =
    useState(null);

  const [filters, setFilters] =
    useState({
      page: 1,
      limit: 10,
      role: "",
      status: "",
      keyword: "",
    });

  // ================= FETCH =================
  const fetchUsers =
    async () => {
      try {

        setLoading(true);

        const res =
          await getUsers(filters);

        setUsers(
          res.data || []
        );

        setPagination(
          res.pagination
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  // ================= STATUS =================
  const handleStatusChange =
    async (id, status) => {
      try {

        await updateUserStatus(
          id,
          status
        );

        fetchUsers();

      } catch (err) {

        console.log(err);

      }
    };

  // ================= ROLE =================
  const handleRoleChange =
    async (id, role) => {
      try {

        await updateUserRole(
          id,
          role
        );

        fetchUsers();

      } catch (err) {

        console.log(err);

      }
    };

  // ================= DELETE =================
  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this user?"
        );

      if (!confirmDelete)
        return;

      try {

        await deleteUser(id);

        fetchUsers();

      } catch (err) {

        console.log(err);

      }
    };

  // ================= LOADING =================
  if (loading) {
    return <UsersLoader />;
  }

  return (
    <div
      className="
        space-y-8
      "
    >

      <UsersHero />

      <UsersFilters
        filters={filters}
        setFilters={setFilters}
      />

      <UsersTable
        users={users}
        pagination={pagination}
        handleRoleChange={
          handleRoleChange
        }
        handleStatusChange={
          handleStatusChange
        }
        handleDelete={
          handleDelete
        }
      />

      <UsersPagination
        filters={filters}
        setFilters={setFilters}
        pagination={pagination}
      />

    </div>
  );
}

export default UsersManagementPage;