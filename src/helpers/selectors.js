export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  let appointmentsForDay = [];
  const nameOfDay = day;
  const selectedDay = state.days.filter(day => day.name === nameOfDay)[0];

  if (!selectedDay) {
    return appointmentsForDay;
  
  }
  for (const appointment of selectedDay.appointments) {
    appointmentsForDay.push(appointment);
  }

appointmentsForDay = appointmentsForDay.map(appointment => state.appointments[appointment]);

// console.log("appointmentsForDay:::", appointmentsForDay);
return appointmentsForDay;
}


