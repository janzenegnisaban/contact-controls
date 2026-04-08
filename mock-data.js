/**
 * KaliArena — shared mock data for local testing when no PDF is uploaded.
 * Loaded by anyo-controls.html and match-control.html before inline scripts.
 */
(function (global) {
  'use strict';

  var anyoCategoryOrderText =
    'Featherweight (Boys, 12-15)\n' +
    'Bantamweight (Girls, 10-12)\n' +
    'Lightweight (Mixed, 16-18)';

  var anyoTeamOrder =
    'CCS Arnis Team, SIKHADA ARNIS TEAM, Manila Warriors, Quezon City Fighters, Iloilo Arnis Club, Bacolod Sticks';

  var anyoRosterText =
    'Janzen Egnisaban, CCS Arnis Team, Featherweight (Boys, 12-15)\n' +
    'Zoren Nicdao, SIKHADA ARNIS TEAM, Featherweight (Boys, 12-15)\n' +
    'Reyes, Manila Warriors, Featherweight (Boys, 12-15)\n' +
    'Marco Santos, CCS Arnis Team, Featherweight (Boys, 12-15)\n' +
    'Kim Reyes, SIKHADA ARNIS TEAM, Featherweight (Boys, 12-15)\n' +
    'Dela Cruz, Manila Warriors, Bantamweight (Girls, 10-12)\n' +
    'Luna, Quezon City Fighters, Bantamweight (Girls, 10-12)\n' +
    'Ramos, Quezon City Fighters, Bantamweight (Girls, 10-12)\n' +
    'Gomez, Iloilo Arnis Club, Bantamweight (Girls, 10-12)\n' +
    'Navarro, Iloilo Arnis Club, Bantamweight (Girls, 10-12)\n' +
    'Diaz, Bacolod Sticks, Lightweight (Mixed, 16-18)\n' +
    'Ocampo, Bacolod Sticks, Lightweight (Mixed, 16-18)\n' +
    'Ana Cruz, CCS Arnis Team, Lightweight (Mixed, 16-18)\n' +
    'Rafael Santos, SIKHADA ARNIS TEAM, Lightweight (Mixed, 16-18)\n' +
    'Sofia Mendoza, Manila Warriors, Lightweight (Mixed, 16-18)';

  /** Sample judge scores (optional) — same shape as live storage after judging */
  function demoScore(j1, j2, j3, j4, j5, deduction) {
    return {
      j1: j1,
      j2: j2,
      j3: j3,
      j4: j4,
      j5: j5,
      deduction: deduction || 0,
      deductHistory: deduction ? [deduction] : [],
    };
  }

  /**
   * One bracket per category + game type (same as PDF/setup pipeline).
   * Featherweight / Bantamweight / Lightweight each have their own key.
   */
  var anyoBrackets = {
    'cat-1-anyo-traditional': {
      categoryId: 'cat-1',
      gameType: 'anyo-traditional',
      participants: [
        { id: 'p1', name: 'Janzen Egnisaban', team: 'CCS Arnis Team', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p2', name: 'Zoren Nicdao', team: 'SIKHADA ARNIS TEAM', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p3', name: 'Reyes', team: 'Manila Warriors', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p4', name: 'Marco Santos', team: 'CCS Arnis Team', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p5', name: 'Kim Reyes', team: 'SIKHADA ARNIS TEAM', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
      ],
      scores: {
        p2: demoScore(9, 9, 8.5, 9, 9, 0),
        p4: demoScore(8.5, 8, 8.5, 9, 8, 0.25),
      },
    },
    'cat-2-anyo-traditional': {
      categoryId: 'cat-2',
      gameType: 'anyo-traditional',
      participants: [
        { id: 'p6', name: 'Dela Cruz', team: 'Manila Warriors', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p7', name: 'Luna', team: 'Quezon City Fighters', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p8', name: 'Ramos', team: 'Quezon City Fighters', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p9', name: 'Gomez', team: 'Iloilo Arnis Club', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p10', name: 'Navarro', team: 'Iloilo Arnis Club', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
      ],
      scores: {
        p7: demoScore(8.5, 9, 9, 8.5, 9, 0),
        p9: demoScore(8, 8.5, 8, 8.5, 8, 0.5),
      },
    },
    'cat-3-anyo-traditional': {
      categoryId: 'cat-3',
      gameType: 'anyo-traditional',
      participants: [
        { id: 'p11', name: 'Diaz', team: 'Bacolod Sticks', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
        { id: 'p12', name: 'Ocampo', team: 'Bacolod Sticks', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
        { id: 'p13', name: 'Ana Cruz', team: 'CCS Arnis Team', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
        { id: 'p14', name: 'Rafael Santos', team: 'SIKHADA ARNIS TEAM', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
        { id: 'p15', name: 'Sofia Mendoza', team: 'Manila Warriors', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
      ],
      scores: {
        p12: demoScore(9, 8.5, 9, 9, 8.5, 0),
        p14: demoScore(8.5, 8.5, 8, 9, 8.5, 0),
        p15: demoScore(8, 8, 8.5, 8, 8.5, 0.25),
      },
    },
  };

  /**
   * Full combat roster: name | team | weightClass | division | ageRange
   * Each unique weight+division+age becomes its own bracket in match-control.
   * Five categories × 4–8 fighters for multi-bracket queue / PDF-free demos.
   */
  var matchRosterText =
    /* Featherweight · Boys · 12-15 */
    'Janzen Egnisaban | CCS Arnis Team | Featherweight | Boys | 12-15\n' +
    'Marco Santos | CCS Arnis Team | Featherweight | Boys | 12-15\n' +
    'Zoren Nicdao | SIKHADA ARNIS TEAM | Featherweight | Boys | 12-15\n' +
    'Kim Reyes | SIKHADA ARNIS TEAM | Featherweight | Boys | 12-15\n' +
    'Reyes | Manila Warriors | Featherweight | Boys | 12-15\n' +
    'Antonio Bautista | Quezon City Fighters | Featherweight | Boys | 12-15\n' +
    'Ethan Morales | Iloilo Arnis Club | Featherweight | Boys | 12-15\n' +
    'Carlos Rivera | Bacolod Sticks | Featherweight | Boys | 12-15\n' +
    /* Bantamweight · Girls · 10-12 */
    'Dela Cruz | Manila Warriors | Bantamweight | Girls | 10-12\n' +
    'Luna | Quezon City Fighters | Bantamweight | Girls | 10-12\n' +
    'Ramos | Quezon City Fighters | Bantamweight | Girls | 10-12\n' +
    'Gomez | Iloilo Arnis Club | Bantamweight | Girls | 10-12\n' +
    'Navarro | Iloilo Arnis Club | Bantamweight | Girls | 10-12\n' +
    'Isabel Torres | CCS Arnis Team | Bantamweight | Girls | 10-12\n' +
    'Mia Fernandez | SIKHADA ARNIS TEAM | Bantamweight | Girls | 10-12\n' +
    'Chloe Villanueva | Bacolod Sticks | Bantamweight | Girls | 10-12\n' +
    /* Lightweight · Mixed · 16-18 */
    'Diaz | Bacolod Sticks | Lightweight | Mixed | 16-18\n' +
    'Ocampo | Bacolod Sticks | Lightweight | Mixed | 16-18\n' +
    'Ana Cruz | CCS Arnis Team | Lightweight | Mixed | 16-18\n' +
    'Rafael Santos | SIKHADA ARNIS TEAM | Lightweight | Mixed | 16-18\n' +
    'Sofia Mendoza | Manila Warriors | Lightweight | Mixed | 16-18\n' +
    'Jordan Lee | Quezon City Fighters | Lightweight | Mixed | 16-18\n' +
    'Sam Delgado | Iloilo Arnis Club | Lightweight | Mixed | 16-18\n' +
    'Alex Nuñez | Manila Warriors | Lightweight | Mixed | 16-18\n' +
    /* Welterweight · Mens · Open */
    'Miguel Aguilar | CCS Arnis Team | Welterweight | Mens | Open\n' +
    'Vince Padilla | SIKHADA ARNIS TEAM | Welterweight | Mens | Open\n' +
    'Rodrigo Salazar | Manila Warriors | Welterweight | Mens | Open\n' +
    'Neil Castillo | Quezon City Fighters | Welterweight | Mens | Open\n' +
    'Paolo Ignacio | Iloilo Arnis Club | Welterweight | Mens | Open\n' +
    'Derek Ho | Bacolod Sticks | Welterweight | Mens | Open\n' +
    /* Middleweight · Womens · Open */
    'Rachel Ann Lim | CCS Arnis Team | Middleweight | Womens | Open\n' +
    'Bianca Ortega | SIKHADA ARNIS TEAM | Middleweight | Womens | Open\n' +
    'Denise Aquino | Manila Warriors | Middleweight | Womens | Open\n' +
    'Patricia Go | Quezon City Fighters | Middleweight | Womens | Open\n' +
    'Hannah Sy | Iloilo Arnis Club | Middleweight | Womens | Open\n' +
    'Kara Valdez | Bacolod Sticks | Middleweight | Womens | Open\n' +
    'Janelle Cruz | CCS Arnis Team | Middleweight | Womens | Open\n' +
    'Mariel Santos | Manila Warriors | Middleweight | Womens | Open';

  global.KaliArenaMock = {
    anyoCategoryOrderText: anyoCategoryOrderText,
    anyoTeamOrder: anyoTeamOrder,
    anyoRosterText: anyoRosterText,
    anyoBrackets: anyoBrackets,
    matchRosterText: matchRosterText,
  };
})(typeof window !== 'undefined' ? window : globalThis);
