import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import "./landsSection.styles.css";

const LandsSection = ({ parkId, disneyPark, universalPark }) => {
  let [park, setPark] = useState("");
  let [lands, setLands] = useState([]);
  let [rides, setRides] = useState([]);

  useEffect(() => {
    axios
      .get("https://queue-times.com/parks.json")
      .then((res) => res.data)
      .then((data) => {
        data.forEach((attraction) => {
          if (disneyPark && attraction.id === 2) {
            attraction.parks.forEach((park) => {
              if (park.id === parkId) {
                return setPark(park.name);
              }
            });
          }

          if (universalPark && attraction.id === 12) {
            attraction.parks.forEach((park) => {
              if (park.id === parkId) {
                return setPark(park.name);
              }
            });
          }
        });
      });
  }, [disneyPark, parkId, universalPark]);

  useEffect(() => {
    axios
      .get(`https://queue-times.com/parks/${parkId}/queue_times.json`)
      .then((res) => res.data)
      .then((data) => {
        setLands(data.lands);
      });
  }, [parkId]);

  useEffect(() => {
    axios
      .get(`https://queue-times.com/parks/${parkId}/queue_times.json`)
      .then((res) => res.data)
      .then((data) => {
        setRides(data.rides);
      });
  }, [parkId]);

  if (lands.length > 0) {
    return (
      <section className="container lands-section-container">
        <div className="lands-section-heading">
          <div className={"heading"}>
            <h2>{park}</h2>
            <h4>Scroll Down To View Live Ride & Attraction Times</h4>
          </div>
          <div
            className="btn refresh-btn"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </div>
        </div>
        <div className="table-wrapper">
          {lands.map((land) => {
            return (
              <table
                key={land.id.toString()}
                className={`table ${land.name}-table`}
              >
                <thead>
                  <tr className={"table-headers"}>
                    <th className="ride-name">{land.name}</th>
                    <th>Status</th>
                    <th>Current Wait Time</th>
                    <th>Last Updated</th>
                  </tr>
                </thead>

                {land.rides.map((ride, index) => {
                  const lastUpdated = new moment(ride.last_updated);
                  const currentTime = new moment();
                  const duration = moment.duration(
                    currentTime.diff(lastUpdated)
                  );
                  return (
                    <tbody
                      className={`ride-info ${
                        land.rides.length === 1
                          ? "single-row-table"
                          : "multi-row-table"
                      }`}
                      key={ride.id.toString()}
                    >
                      <tr className={"row"}>
                        <td className={"ride-name"}>{ride.name}</td>
                        <td
                          className={ride.is_open ? "ride-open" : "ride-closed"}
                        >
                          {ride.is_open ? "Open" : "Closed"}
                        </td>
                        <td
                          className={`wait-time ${
                            !ride.is_open
                              ? "ride-closed"
                              : ride.wait_time <= 30
                              ? "wait-time-low"
                              : ride.wait_time > 30 && ride.wait_time <= 60
                              ? "wait-time-med"
                              : ride.wait_time > 60
                              ? "wait-time-high"
                              : null
                          }`}
                        >
                          {ride.is_open
                            ? `${ride.wait_time} Minutes`
                            : "Closed"}
                        </td>
                        <td className="last-updated">
                          {Math.floor(duration.as("seconds")) <= 59
                            ? `${Math.floor(
                                duration.as("seconds")
                              ).toString()} Seconds Ago`
                            : Math.floor(duration.as("seconds")) > 60 < 119
                            ? `${Math.floor(
                                duration.as("minutes")
                              ).toString()} Minute Ago`
                            : Math.floor(duration.as("seconds")) > 119
                            ? `${Math.floor(
                                duration.as("minutes")
                              ).toString()} Minutes Ago`
                            : `Error Occured`}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            );
          })}
        </div>
      </section>
    );
  }

  if (rides.length > 0) {
    return (
      <section className="container lands-section-container">
        <div className="lands-section-heading">
          <div className={"heading"}>
            <h2>{park}</h2>
            <h4>Scroll Down To View Live Ride & Attraction Times</h4>
          </div>
          <div
            className="btn refresh-btn"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </div>
        </div>
        <div className="table-wrapper">
          <table className={"table"}>
            <thead>
              <tr className={"table-headers"}>
                <th className="ride-name">{park}</th>
                <th>Status</th>
                <th>Current Wait Time</th>
                <th>Last Updated</th>
              </tr>
            </thead>

            {rides.map((ride) => {
              const lastUpdated = new moment(ride.last_updated);
              const currentTime = new moment();
              const duration = moment.duration(currentTime.diff(lastUpdated));
              return (
                <tbody key={ride.id} className={"ride-info"}>
                  <tr className={"row"}>
                    <td className={"ride-name"}>{ride.name}</td>
                    <td className={ride.is_open ? "ride-open" : "ride-closed"}>
                      {ride.is_open ? "Open" : "Closed"}
                    </td>
                    <td
                      className={`wait-time ${
                        !ride.is_open
                          ? "ride-closed"
                          : ride.wait_time <= 30
                          ? "wait-time-low"
                          : ride.wait_time > 30 && ride.wait_time <= 60
                          ? "wait-time-med"
                          : ride.wait_time > 60
                          ? "wait-time-high"
                          : null
                      }`}
                    >
                      {ride.is_open ? `${ride.wait_time} Minutes` : "Closed"}
                    </td>
                    <td className="last-updated">
                      {Math.floor(duration.as("seconds")) <= 59
                        ? `${Math.floor(
                            duration.as("seconds")
                          ).toString()} Seconds Ago`
                        : Math.floor(duration.as("seconds")) > 60 < 119
                        ? `${Math.floor(
                            duration.as("minutes")
                          ).toString()} Minute Ago`
                        : Math.floor(duration.as("seconds")) > 119
                        ? `${Math.floor(
                            duration.as("minutes")
                          ).toString()} Minutes Ago`
                        : `Error Occured`}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </section>
    );
  }
};

export default LandsSection;
