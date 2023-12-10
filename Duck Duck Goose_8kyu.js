function duckDuckGoose(players, goose) {
  const playersCount = players.length;
  const nextGooseIndex = goose % playersCount;

  if (nextGooseIndex > 0) {
    return players[nextGooseIndex - 1].name;
  } else {
    if (goose <= playersCount) {
      return players[goose - 1].name;
    } else {
      return players[playersCount - 1].name;
    }
  }
}

// function duckDuckGoose(players, goose) {
//   return players[(goose - 1) % players.length].name;
// }

duckDuckGoose(["a", "b", "c"], 1);
