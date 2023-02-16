const { dayjs } = Dayjs;

const num: number = 10;

const AttendanceTaker = () => {
  console.log(`Hello ${world}`);
  console.log(num);
  console.log(
    dayjs()
      .startOf('month')
      .add(1, 'day')
      .set('year', 2018)
      .format('YYYY-MM-DD HH:mm:ss'),
  );
};
