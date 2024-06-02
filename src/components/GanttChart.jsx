import style from "../style/ganttChart.module.css";

export default function GanttChart() {
  const numRows = 8;
  const numColumns = 4;

  const generateItems = () => {
    const items = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        items.push(<div key={`${row}-${col}`} className={style.item}></div>);
      }
    }
    return items;
  };

  return (
    <div class={style.container}>
      <div className={style.gridContainer}>{generateItems()}</div>
    </div>
  );
}
