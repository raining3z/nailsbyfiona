'use client';

import { Calendar } from 'react-big-calendar';
import { localizer } from '@/utils/calendarLocalizer';
import { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from '@/components/UI/Modal';
import { styled } from '@pigment-css/react';

const events = [
  {
    title: 'Community Picnic',
    start: new Date(2025, 4, 15, 13, 0),
    end: new Date(2025, 4, 15, 15, 0),
    desc: 'Discuss new budget and upcoming projects',
    resource: {
      location: 'Clubhouse',
      host: 'Jane Doe',
    },
  },
  {
    title: 'Board Meeting',
    start: new Date(2025, 4, 20, 18, 0),
    end: new Date(2025, 4, 20, 19, 30),
    desc: 'Discuss new budget and upcoming projects add super long text to test the overflow and ellipsis functionality of the calendar component and see how it handles long text',
    resource: {
      location: 'Clubhouse',
      host: 'Jane Doe',
    },
  },
];

const CalendarWrapper = styled.div(({ theme }) => ({
  height: '600px',
  padding: theme.spacing.lg,

  [`@media ${theme.media.mobile}`]: {
    padding: theme.spacing.md,
  },
}));

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  desc: string;
  resource: {
    location: string;
    host: string;
  };
}

const CustomEvent = ({ event }: { event: CalendarEvent }) => {
  const time = new Date(event.start).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <span>
      <strong>{time}</strong> – {event.title}
    </span>
  );
};

export default function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
    desc: '',
    resource: {
      location: '',
      host: '',
    },
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        components={{ event: CustomEvent }}
        onSelectEvent={(event) => {
          setSelectedEvent(event);
          setIsModalOpen(true);
        }}
        views={['month']}
        defaultView="month"
      />

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <h2>{selectedEvent.title}</h2>
        <p>
          <strong>Start:</strong> {selectedEvent.start.toLocaleString()}
        </p>
        <p>
          <strong>End:</strong> {selectedEvent.end.toLocaleString()}
        </p>
        <p>
          <strong>Desc:</strong> {selectedEvent.desc}
        </p>
        <p>
          <strong>Location:</strong> {selectedEvent.resource.location}
        </p>
        <p>
          <strong>Host:</strong> {selectedEvent.resource.host}
        </p>
      </Modal>
    </CalendarWrapper>
  );
}
