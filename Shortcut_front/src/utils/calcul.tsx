export const calculHome = (
  poids: number,
  taille: number,
  age: number,
  activite: string
) => {
  let baseMetabolisme = (13.707 * poids) + (492.3 * (taille / 100)) - (6.673 * age) + 77.607;

  switch (activite) {
    case "sedentaire":
      return Math.round(baseMetabolisme * 1.375);
    case "legere":
      return Math.round(baseMetabolisme * 1.56);
    case "moderee":
      return Math.round(baseMetabolisme * 1.64);
    case "intense":
      return Math.round(baseMetabolisme * 1.82);
  }
};

export const calculFemme = (
  poids: number,
  taille: number,
  age: number,
  activite: string
) => {
  let baseMetabolisme = (9.74 * poids) + (172.9 * (taille / 100)) - (4.737 * age) + 667.051;

  switch (activite) {
    case "sedentaire":
      return Math.round(baseMetabolisme * 1.375);
    case "legere":
      return Math.round(baseMetabolisme * 1.56);
    case "moderee":
      return Math.round(baseMetabolisme * 1.64);
    case "intense":
      return Math.round(baseMetabolisme * 1.82);
  }
};
