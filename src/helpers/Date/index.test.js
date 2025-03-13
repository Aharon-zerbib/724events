import { getMonth } from "./index";

// Regroupe les test pour date
describe("Date helper", () => {
  describe("When getMonth is called", () => {
    //vérifier getMonth reterne janvier
    it("the function returns 'janvier' for 2022-01-01 as date", () => {
      // Création correspondant a 1er janvier 2022
      const date = new Date("2022-01-01");
      // expect = affirmation  toEqual("janvier") que je matend bien a janvier
      expect(getMonth(date)).toEqual("janvier");
    });

    // vérifier getMonth returne juillet
    it("the function returns 'juillet' for 2022-07-08 as date", () => {
      // Création correspondant a 8 juillet 2022
      const date = new Date("2022-07-08");
      // pareille que pour le premier test je sa doit etre une affirmation que je matend bien a juillet
      expect(getMonth(date)).toEqual("juillet");
    });
  });
});

// du coup j;ai importer getMonth pour verifier si il retourne bien les mois normalement puisque dans la fonction getMonth je retourne MONTHS[date.getMonth()];
