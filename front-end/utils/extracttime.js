const extracttime = (datastring) => {
  const data = new Date(datastring);
  const houer = padzero(data.getHours());
  const minute = padzero(data.getMinutes());

  return `${houer}:${minute}`;
};

export default extracttime;

function padzero(number) {
  return number.toString().padStart(2, "0");
}
