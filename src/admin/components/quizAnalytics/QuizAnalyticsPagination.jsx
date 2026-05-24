function QuizAnalyticsPagination({
  filters,
  setFilters,
  pagination,
}) {
  return (
    <div
      className="
        flex items-center
        justify-center

        gap-3
      "
    >

      <button
        disabled={
          !pagination?.hasPrev
        }
        onClick={() =>
          setFilters({
            ...filters,
            page:
              filters.page - 1,
          })
        }
        className="
          px-5 py-3

          rounded-2xl

          bg-white

          border border-gray-200

          disabled:opacity-40
        "
      >
        Previous
      </button>

      <div
        className="
          px-5 py-3

          rounded-2xl

          bg-cyan-500

          text-white

          font-semibold
        "
      >
        {filters.page}
      </div>

      <button
        disabled={
          !pagination?.hasNext
        }
        onClick={() =>
          setFilters({
            ...filters,
            page:
              filters.page + 1,
          })
        }
        className="
          px-5 py-3

          rounded-2xl

          bg-white

          border border-gray-200

          disabled:opacity-40
        "
      >
        Next
      </button>

    </div>
  );
}

export default QuizAnalyticsPagination;