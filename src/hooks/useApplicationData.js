import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    const apiServer = `api/`;
    Promise.all([
      axios.get(apiServer + "days"),
      axios.get(apiServer + "appointments"),
      axios.get(apiServer + "interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const updateSpots = function (state, appointments, id) {
    // find the day
    const dayObj = state.days.find((d) => d.name === state.day);

    // calc the spots using new appointments
    let spots = 0;
    for (const id of dayObj.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }

    // update day & days
    const newDay = { ...dayObj, spots };
    const days = state.days.map((d) => (d.name === state.day ? newDay : d));

    // return an updated days array
    return days;
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      const days = updateSpots(state, appointments);
      setState(prev => ({ ...state, appointments, days }));
    });
  }

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then(() => {
      const days = updateSpots(state, appointments);
      setState(prev => ({ ...state, appointments, days }));
    });
  }

  return { state, setDay, bookInterview, cancelInterview };
}
