'use client';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineCard from './TimelineCard';
import { type Props as TimelineEvent } from './TimelineCard';

type Props = { events: TimelineEvent[] };

export default function SimpleTimeline(props: Props) {
  return (
    <Timeline position='alternate'>
      {props.events &&
        props.events.map((event) => {
          const date_str = event.date.toString().split('T')[0];
          return (
            <TimelineItem key={event.title}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineCard {...event} />
              </TimelineContent>
            </TimelineItem>
          );
        })}
    </Timeline>
  );
}
