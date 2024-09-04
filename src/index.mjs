import pokeName from "./pokename.json"

import uniqueRandomArray from "unique-random-array";

const randon = uniqueRandomArray(pokeName);
const unique = uniqueRandomArray(pokeName);

export { pokeName as all, randon, unique };
