import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const links = [
    {
      name: "Privacy Policy",
      path: "/privacy",
    },
    {
      name: "Terms of Service",
      path: "/terms",
    },
    {
      name: "Contact Support",
      path: "/contactUs",
    },

  ];

  return (
    <footer
      className="
        border-t border-gray-100
        bg-white
        mt-10
      "
    >

      <div
        className="
          max-w-[1400px]
          mx-auto

          px-8 py-6

          flex flex-col
          md:flex-row

          items-start
          md:items-center

          justify-between
          gap-5
        "
      >

        {/* LEFT */}
        <div>

          <h2
            className="
              text-[18px]
              font-bold
              text-[#111827]
            "
          >
            Trackademic
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              mt-2
            "
          >
            © 2026 Trackademic Editorial.
            All rights reserved.
          </p>

        </div>

        {/* RIGHT */}
        <div
          className="
            flex flex-wrap
            items-center
            gap-8
          "
        >

          {links.map((link) => (
            <button
              key={link.name}
              onClick={() =>
                navigate(link.path)
              }
              className="
                text-[15px]
                text-gray-500

                hover:text-black

                transition-all duration-300
              "
            >
              {link.name}
            </button>
          ))}

        </div>

      </div>

    </footer>
  );
}

export default Footer;