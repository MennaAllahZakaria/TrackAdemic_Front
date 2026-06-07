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

        p-4
        sm:p-5
        lg:p-6

        flex flex-col
        gap-3
        sm:gap-4
        md:flex-row
        md:items-center
        md:gap-4

        w-full
      "
    >

      {/* SEARCH INPUT */}
      <div className="relative flex-1 min-w-0">

        <i
          className="
            ri-search-line

            absolute left-3
            sm:left-4
            top-1/2
            -translate-y-1/2

            text-gray-400
            pointer-events-none
            text-sm
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

            pl-10
            sm:pl-12
            pr-3
            sm:pr-4
            py-2.5
            sm:py-3
            lg:py-4

            rounded-2xl

            bg-gray-100

            outline-none

            focus:ring-2
            focus:ring-cyan-400

            text-xs
            sm:text-sm
          "
        />

      </div>

      {/* ROLE FILTER */}
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
          px-3
          sm:px-4
          lg:px-5
          py-2.5
          sm:py-3
          lg:py-4

          rounded-2xl

          bg-gray-100

          outline-none

          focus:ring-2
          focus:ring-cyan-400

          text-xs
          sm:text-sm

          flex-1
          md:flex-none
          md:min-w-[140px]
          lg:min-w-[160px]

          cursor-pointer
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

      {/* STATUS FILTER */}
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
          px-3
          sm:px-4
          lg:px-5
          py-2.5
          sm:py-3
          lg:py-4

          rounded-2xl

          bg-gray-100

          outline-none

          focus:ring-2
          focus:ring-cyan-400

          text-xs
          sm:text-sm

          flex-1
          md:flex-none
          md:min-w-[140px]
          lg:min-w-[160px]

          cursor-pointer
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
