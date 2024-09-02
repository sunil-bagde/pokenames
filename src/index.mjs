import pokeName from "./pokename.json" assert { type: "json" };

import uniqueRandomArray from "unique-random-array";

const randon = uniqueRandomArray(pokeName);

export { pokeName as all, randon };
