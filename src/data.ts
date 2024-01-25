/**
 * A PEOPLE is a person with a name, a forename, a size and a boolean indicating if the person is a student.
 */
export type PEOPLE = {
  readonly isStudent: boolean;
  readonly name: string;
  readonly forename: string;
  readonly size: number;
};

/**
 * FctFilterPeople is the type of functions that takes a PEOPLE as input and returns a boolean.
 * It aims to be used as a filter function.
 */
export type FctFilterPeople = (p: PEOPLE) => boolean;

/**
 * updatePeople takes a PEOPLE, a key and a value and returns a new PEOPLE with the key updated with the value.
 */
//Traduction de : updatePeople<K extends keyof PEOPLE> : La fonction updatePeople utilise K qui appartient à l'ensemble des clés de l'objet PEOPLE
export function updatePeople<K extends keyof PEOPLE>(
  p: PEOPLE,
  k: K,
  v: PEOPLE[K]
): PEOPLE {
  return { ...p, [k]: v };
}
