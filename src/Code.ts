const { dayjs } = Dayjs;

const AttendanceTaker = () => {
  console.log(`Hello ${world}`);
  console.log(
    dayjs()
      .startOf('month')
      .add(1, 'day')
      .set('year', 2018)
      .format('YYYY-MM-DD HH:mm:ss'),
  );
};
