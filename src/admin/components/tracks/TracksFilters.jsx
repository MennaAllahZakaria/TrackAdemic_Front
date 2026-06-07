function TracksFilters({
  filters,
  setFilters,
  openCreateModal,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[24px]
        sm:rounded-[32px]

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

        w-full
      "
    >

      <div className="relative flex-1 min-w-0">

        <i
          className="
            ri-search-line

            absolute left-3
            sm:left-4
            top-1/2
            -translate-y-1/2

            text-gray-400
            text-sm
            pointer-events-none
          "
        ></i>

        <input
          type="text"
          placeholder="Search tracks..."
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

      <button
        onClick={openCreateModal}
        className="
          px-4
          sm:px-5
          lg:px-6
          py-2.5
          sm:py-3
          lg:py-4

          rounded-2xl

          bg-cyan-500

          text-white

          font-semibold

          hover:bg-cyan-600

          transition-all duration-300

          text-xs
          sm:text-sm

          flex-1
          md:flex-none
          whitespace-nowrap
        "
      >
        + Create Track
      </button>

    </div>
  );
}

export default TracksFilters;
