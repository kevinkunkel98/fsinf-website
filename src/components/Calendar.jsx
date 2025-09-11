import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from '@fullcalendar/list';
import deLocale from '@fullcalendar/core/locales/de';
import events from "./Events.json";

const pad_digit = (num) => {
  if (num < 10) return "0" + num;
  return num;
}

const day_month_year = (date) => {
  return pad_digit(date.getDate()) + "." + pad_digit(date.getMonth()+1) + "." + date.getFullYear();
}

const hour_minute = (date) => {
  return pad_digit(date.getHours()) + ":" + pad_digit(date.getMinutes());
}

const timeline = (event) => {
  let builder = day_month_year(event.start);
  if (event.allDay) {
    if (event.end && event.start.getDate() != event.end.getDate()) {
      builder += " - ";
      builder += day_month_year(event.end);
    }
    builder += " ganztägig";
  } else {
    builder += " " + hour_minute(event.start);
    if (event.end) {
      builder += " - ";
      if (event.start.getDate() != event.end.getDate()) builder += day_month_year(event.end) + " ";
      builder += hour_minute(event.end);
    }
  }
  return builder;
}

export default function Calendar() {
  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();

    var overlay = document.getElementById('popup');
    overlay.classList.toggle('hidden');

    var title = document.getElementById('popup-title');
    title.innerText = info.event.title;

    var date = document.getElementById('popup-date');
    date.innerText = timeline(info.event);

    var description = document.getElementById('popup-description');
    if (info.event.extendedProps.description != undefined) {
      description.innerText = info.event.extendedProps.description;
    } else description.innerText = "";
  }
  
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, listPlugin, interactionPlugin ]}
      eventClick={handleEventClick}
      locale={deLocale}
      editable={false}
      selectable={true}
      selectMirror={false}
      dayMaxEvents={false}
      initialEvents={events}
      nextDayThreshold={'06:00:00'}
    />
  );
}