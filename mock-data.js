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

  var anyoBrackets = {
    'cat-1-anyo-traditional': {
      participants: [
        { id: 'p1', name: 'Janzen Egnisaban', team: 'CCS Arnis Team', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p2', name: 'Zoren Nicdao', team: 'SIKHADA ARNIS TEAM', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p3', name: 'Reyes', team: 'Manila Warriors', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p4', name: 'Marco Santos', team: 'CCS Arnis Team', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p5', name: 'Kim Reyes', team: 'SIKHADA ARNIS TEAM', categoryId: 'cat-1', categoryLabel: 'Featherweight (Boys, 12-15)' },
        { id: 'p6', name: 'Dela Cruz', team: 'Manila Warriors', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p7', name: 'Luna', team: 'Quezon City Fighters', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p8', name: 'Ramos', team: 'Quezon City Fighters', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p9', name: 'Gomez', team: 'Iloilo Arnis Club', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p10', name: 'Navarro', team: 'Iloilo Arnis Club', categoryId: 'cat-2', categoryLabel: 'Bantamweight (Girls, 10-12)' },
        { id: 'p11', name: 'Diaz', team: 'Bacolod Sticks', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
        { id: 'p12', name: 'Ocampo', team: 'Bacolod Sticks', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
        { id: 'p13', name: 'Ana Cruz', team: 'CCS Arnis Team', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
        { id: 'p14', name: 'Rafael Santos', team: 'SIKHADA ARNIS TEAM', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
        { id: 'p15', name: 'Sofia Mendoza', team: 'Manila Warriors', categoryId: 'cat-3', categoryLabel: 'Lightweight (Mixed, 16-18)' },
      ],
      scores: {},
    },
  };

  var matchRosterText =
    'Janzen Egnisaban | CCS Arnis Team\n' +
    'Marco Santos | CCS Arnis Team\n' +
    'Zoren Nicdao | SIKHADA ARNIS TEAM\n' +
    'Kim Reyes | SIKHADA ARNIS TEAM\n' +
    'Reyes | Manila Warriors\n' +
    'Dela Cruz | Manila Warriors\n' +
    'Luna | Quezon City Fighters\n' +
    'Ramos | Quezon City Fighters\n' +
    'Gomez | Iloilo Arnis Club\n' +
    'Navarro | Iloilo Arnis Club\n' +
    'Diaz | Bacolod Sticks\n' +
    'Ocampo | Bacolod Sticks';

  global.KaliArenaMock = {
    anyoCategoryOrderText: anyoCategoryOrderText,
    anyoTeamOrder: anyoTeamOrder,
    anyoRosterText: anyoRosterText,
    anyoBrackets: anyoBrackets,
    matchRosterText: matchRosterText,
  };
})(typeof window !== 'undefined' ? window : globalThis);
