export interface Day {
  name: string;
  day: number;
  longName: string;
  date: Date;
  today: boolean;
}

export interface DayCell {
  day: Day;
  x: number;
  y: number;
  selected: boolean;
}
