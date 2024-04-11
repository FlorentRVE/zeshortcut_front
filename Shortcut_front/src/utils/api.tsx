// ============================ Fonction ========================

// ============ API ==========
const API_BASE_URL = "http://192.168.0.79:8000/getMeal";

let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
};

export const getMeals = async (info: Object) => {
  await fetch(API_BASE_URL, {
    method: "POST",
    body: JSON.stringify(info),
    headers: headersList,
  })
  .then((res) => res.json())
  .then((data) => console.log(data));
};
