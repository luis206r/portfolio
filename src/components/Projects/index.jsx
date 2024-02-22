import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { BiSolidCameraMovie } from "react-icons/bi";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const matchMediaDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchMediaDark.matches);

    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    matchMediaDark.addListener(handleChange);

    return () => {
      matchMediaDark.removeListener(handleChange);
    };
  }, []);

  return (
    <div className={s.container}>
      <div
        className={s.subContainer}
        onClick={() => {
          window.open("https://tmdb-front-nine.vercel.app", "_blank");
        }}
        style={{
          background: `linear-gradient(to top right, ${
            !isDarkMode ? "#ebeed3, #bbdebd" : "#2a6b6b,#4fba4d"
          })`,
        }}
      >
        <div className={s.scHalf} style={{ marginRight: "10px" }}>
          <h1>
            The Movie DataBase &nbsp; <BsArrowUpRightCircleFill />
          </h1>

          <p>
            TMDb is a platform designed to offer users an extensive catalog of
            movies and series. The application allows users to register, log in,
            explore detailed information about movies and series, add content to
            their favorites list, and connect with other movie and television
            enthusiasts.
          </p>
          <p>
            <b>Registration and Authentication:</b> Users can create accounts,
            log in, and keep their sessions active using authentication tokens,
            providing a secure and personalized experience.
          </p>
          <p>
            <b>Detailed Catalog:</b> Leveraging the TMDb API, the application
            provides access to a vast content library of movies and series,
            offering detailed and updated information to cater to user
            preferences.
          </p>
          <p>
            <b>Favorites Lists:</b> Users have the ability to add or remove
            content from their favorites lists, customizing their experience and
            marking the movies and series they love the most.
          </p>
          <p>
            <b>User Profile:</b> The application provides users with a
            personalized profile where they can access their information, view
            their favorites, and explore profiles of other users, fostering
            interaction and community within the platform.
          </p>
          <p>
            <b>Filtering by Year:</b> The year filtering feature makes it easy
            for users to search for specific content, allowing them to explore
            movies and series released in particular years.
          </p>
          <p>
            <b>Password Reset:</b> Users can securely reset their passwords
            through a verification code sent to their email, ensuring the
            protection of their accounts.
          </p>
        </div>
        <div className={s.scHalf} style={{ justifyContent: "space-evenly" }}>
          <img
            src="./tmdb_scs.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
          &nbsp;
          <img
            src="./tmdb_scs2.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>

      <div
        className={s.subContainer}
        onClick={() => {
          window.open("https://mi-turno-web-deploy.vercel.app/", "_blank");
        }}
        style={{
          background: `linear-gradient(to top left, ${
            !isDarkMode ? "#f0e5fc, #d7b3f7" : "#521638,#004d79"
          })`,
        }}
      >
        <div className={s.scHalf} style={{ justifyContent: "space-evenly" }}>
          <img
            src="./mtw_scs.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
          &nbsp;
          <img
            src="./mtw_scs2.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <div className={s.scHalf} style={{ marginLeft: "10px" }}>
          <h1>
            Mi turno web &nbsp; <BsArrowUpRightCircleFill />
          </h1>
          <p>
            Mi Turno Web is a web application designed to simplify the
            appointment booking process for businesses with multiple physical
            branches. The platform allows efficient management of the number of
            customers present at each location and facilitates the
            administration of available time slots.
          </p>
          <p>
            <b>Customized Bookings:</b> Each branch has the ability to adjust
            the number of customers it can serve simultaneously and define the
            available time ranges for bookings.
          </p>
          <p>
            <b>Appointment Duration:</b> Appointments have a fixed duration of
            15 minutes, making it easy for both the company and customers to
            plan and optimize their time.
          </p>
          <p>
            <b>Flexible Cancellation:</b> Users have the flexibility to cancel
            their appointments up to 2 hours in advance, providing a convenient
            experience and avoiding last-minute inconveniences.
          </p>
          <p>
            <b>Graphic Dashboard for Businesses:</b> The application offers an
            intuitive graphic dashboard for businesses to easily visualize the
            bookings made. This facilitates real-time management and
            organization of customer flow.
          </p>
          <p>
            <b>Metrics and Analysis:</b> In addition to basic functionality, Mi
            Turno Web provides analysis tools that allow administrators to
            obtain metrics based on the bookings made. This provides valuable
            insights for decision-making and continuous service improvement.
          </p>
        </div>
      </div>

      <div
        className={s.subContainer}
        onClick={() => {
          window.open(
            "https://github.com/Dadario23/fast-delivery-front",
            "_blank"
          );
        }}
        style={{
          background: `linear-gradient(to top right, ${
            !isDarkMode ? "#eeeded, #ade0fa" : "#314e55,#21a9a8"
          })`,
        }}
      >
        <div className={s.scHalf} style={{ marginRight: "10px" }}>
          <h1>
            {" "}
            Fast Delivery (in Progress) &nbsp; <BsArrowUpRightCircleFill />
          </h1>
          <p>
            Fast Delivery is an application designed to optimize the operation
            of couriers in a last-mile delivery company. The platform features
            two distinct roles: couriers and administrators, each with specific
            functions to ensure an efficient flow of deliveries.
          </p>
          <p>
            <b>Courier Management:</b> Administrators can access the roster of
            registered couriers, view how many are currently active with ongoing
            deliveries, and know the quantity of packages assigned to each
            courier.
          </p>
          <p>
            <b>Creation and Editing of Packages:</b> The company can create,
            view, and edit the packages to be sent, allowing flexible and
            adaptive management.
          </p>
          <p>
            <b>Real-Time Geolocation:</b> Geolocation is implemented to
            visualize on a map the current location and delivery route of each
            courier, providing administrators with a real-time view of the
            operation.
          </p>
          <p>
            <b>Points and Penalties System:</b> A points system is introduced to
            reward couriers for successfully delivered packages. Penalties are
            also included for incomplete deliveries, encouraging efficient
            performance and responsibility fulfillment.
          </p>
        </div>
        <div className={s.scHalf}>
          <img
            src="./fastD_scsb.png"
            width="100%"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </div>

      <h2>Another mini-projects:</h2>

      <div className={s.subContainer}>
        <div className={s.scTercio}>
          <a
            href="https://64c804bf2d66333b62576e26--magenta-faun-f9e969.netlify.app/"
            target="_blank"
          >
            <img className={s.img2} src="weather-2021-12-07.png" />
          </a>
          <h2>Weather Channel</h2>
        </div>
        <div className={s.scTercio}>
          <a href="https://bright-bonbon-0fc319.netlify.app/" target="_blank">
            <img className={s.img2} src="./reminders-2021-05-28.png" />
          </a>
          <h2>To Do List</h2>
        </div>
        <div className={s.scTercio}>
          <a
            href="https://64c70811457ce75636868ceb--remarkable-syrniki-fdecb4.netlify.app/"
            target="_blank"
          >
            <img className={s.img2} src="./colors.png" />
          </a>
          <h2>Color Game</h2>
        </div>
      </div>
    </div>
  );
};
