import { format } from "date-fns";
type Props = {
  date: Date;
};

const DateFormatter = ({ date }: Props) => {
  return <time dateTime={date.toString()}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
