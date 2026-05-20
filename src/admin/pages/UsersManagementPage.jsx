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

import CreateUserModal
from "../components/users/CreateUserModal";

import {
  createUserByAdmin,
} from "../services/adminService";

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
  const [createUserModal,setCreateUserModal] = useState(false);
  const [createUserLoading,setCreateUserLoading] = useState(false);


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

  // ================= CREATE USER =================
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
        setCreateUserModal={
          setCreateUserModal
        }
      />

      <UsersPagination
        filters={filters}
        setFilters={setFilters}
        pagination={pagination}
      />
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

export default UsersManagementPage;