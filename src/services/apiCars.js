import apiURL from "./restApi";

export async function getAllCars() {
  console.log("fucn get all is called");
  const { data, status, message } = await fetch(`${apiURL}/cars`).then(
    (response) => response.json()
  );
  console.log("data retourned", data);
  if (status === "fail") {
    console.error(message);
    throw new Error("Erreur lors du chargement des voitures");
  }
  return data.data;
}
