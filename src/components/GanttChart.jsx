import React, { useState } from "react";
import style from "../style/ganttChart.module.css";

export default function GanttChart({ startDate, endDate }) {
  const numRows = 7;
  const numColumns = 4;

  const generateItems = () => {
    const items = [];
    const daysSpan = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const startDay = new Date(startDate).getDate();

    for (let day = 1; day <= 31; day++) {
      const isShaded = day >= startDay && day <= startDay + daysSpan;
      items.push(
        <div key={day} className={`item ${isShaded? 'shaded' : ''}`}>
          {day}
        </div>
      );
    }
    return items;
  };

  return (
    <div className={style.container}>
      <div className={style.gridContainer}>{generateItems()}</div>
    </div>
  );
}