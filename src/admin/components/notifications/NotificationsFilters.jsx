function NotificationsFilters({
  filters,
  setFilters,
  openModal,
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
          placeholder="Search notifications..."
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

      <button
        onClick={openModal}
        className="
          px-6 py-4

          rounded-2xl

          bg-cyan-500

          text-white

          font-semibold

          hover:bg-cyan-600

          transition-all duration-300
        "
      >
        + New Notification
      </button>

    </div>
  );
}

export default NotificationsFilters;