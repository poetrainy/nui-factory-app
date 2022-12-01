export const getDay = () => {
  let today = new Date();
  let yy: number = today.getFullYear();
  let mm: number = today.getMonth() + 1;
  let dd: number = today.getDate();
  return { yy, mm, dd };
};
