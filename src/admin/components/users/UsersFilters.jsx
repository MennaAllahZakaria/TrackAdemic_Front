function UsersFilters({
  filters,
  setFilters,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[32px]

        border border-gray-100

        shadow-sm

        p-5
        sm:p-6

        flex flex-col
        xl:flex-row

        gap-4
      "
    >

      <div className="relative flex-1">

        <i
          className="
            ri-search-line

            absolute left-4 top-1/2
            -translate-y-1/2

            text-gray-400
          "
        ></i>

        <input
          type="text"
          placeholder="Search users..."
          value={filters.keyword}
          onChange={(e) =>
            setFilters({
              ...filters,
              keyword:
                e.target.value,
              page: 1,
            })
          }
          className="
            w-full

            pl-12 pr-4 py-4

            rounded-2xl

            bg-gray-100

            outline-none

            focus:ring-2
            focus:ring-cyan-400
          "
        />

      </div>

      <select
        value={filters.role}
        onChange={(e) =>
          setFilters({
            ...filters,
            role:
              e.target.value,
            page: 1,
          })
        }
        className="
          px-5 py-4

          rounded-2xl

          bg-gray-100

          outline-none

          min-w-[180px]
        "
      >

        <option value="">
          All Roles
        </option>

        <option value="user">
          User
        </option>

        <option value="admin">
          Admin
        </option>

      </select>

      <select
        value={filters.status}
        onChange={(e) =>
          setFilters({
            ...filters,
            status:
              e.target.value,
            page: 1,
          })
        }
        className="
          px-5 py-4

          rounded-2xl

          bg-gray-100

          outline-none

          min-w-[180px]
        "
      >

        <option value="">
          All Status
        </option>

        <option value="active">
          Active
        </option>

        <option value="inactive">
          Inactive
        </option>

        <option value="banned">
          Banned
        </option>

      </select>

    </div>
  );
}

export default UsersFilters;