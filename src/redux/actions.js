let heroId = 0;

export const setUniverse = universe => ({
  type: "SET_UNIVERSE",
  payload: {
    universe
  }
});

export const addHero = content => ({
  type: "ADD_HERO",
  payload: {
    id: ++heroId,
    content
  }
});

export const findHero = filterValue => ({
  type: "FIND_HERO",
  payload: { filterValue }
});

export const heroPressedTrue = content => ({
  type: "HERO_PRESSED_TRUE",
  payload: { content }
});

export const heroPressedFalse = content => ({
  type: "HERO_PRESSED_FALSE",
  payload: { content }
});

export const deleteHero = (event, content) => ({
  type: "HERO_DELETE",
  payload: { event, content }
});
