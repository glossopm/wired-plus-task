import * as React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import Container from "@mui/material/Container";
import Chart from "./Chart";
import segmentData from "../data/segment-data.json";

const dayOfWeekMap = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",
};

const getSegmentSummary = (segmentData) => {
  const campaignEvents = segmentData.contacts.reduce(
    (campaignEventsSum, contact) => {
      return [...campaignEventsSum, ...contact.campaignEvents];
    },
    []
  );

  const dayAndTime = campaignEvents.map((campaignEvent) => {
    const day = new Date(campaignEvent.at);
    const dayOfWeek = day.getDay();
    const timeOfDay = day.getHours();
    return {
      dayOfWeek,
      timeOfDay,
    };
  });

  const summary = dayAndTime.reduce(
    (summary, { dayOfWeek, timeOfDay }) => {
      const dayOfWeekTotal = summary.dayOfWeek[dayOfWeek] || 0;
      const timeOfDayTotal = summary.timeOfDay[timeOfDay] || 0;
      return {
        dayOfWeek: {
          ...summary.dayOfWeek,
          [dayOfWeek]: dayOfWeekTotal + 1,
        },
        timeOfDay: {
          ...summary.timeOfDay,
          [timeOfDay]: timeOfDayTotal + 1,
        },
      };
    },
    {
      dayOfWeek: {},
      timeOfDay: {},
    }
  );

  return summary;
};

const getDayOfWeekData = (summary) => {
  return Object.entries(summary.dayOfWeek).map(([day, value]) => {
    return {
      name: dayOfWeekMap[day],
      value,
    };
  });
};

const getTimeOfDayData = (summary) => {
  return Object.entries(summary.timeOfDay).map(([time, value]) => {
    return {
      name: time,
      value,
    };
  });
};

const Segment = () => {
  const summary = getSegmentSummary(segmentData);
  const dayOfWeekData = getDayOfWeekData(summary);
  const timeOfDayData = getTimeOfDayData(summary);

  return (
    <Container display="flex">
      <Chart data={dayOfWeekData} />
      <Chart data={timeOfDayData} />
    </Container>
  );
};

export default Segment;
