import { writable } from 'svelte/store';

export const newSong = writable(true);
export const points = writable(0);
export const isGameStarted = writable(false);
export const isGameEnded = writable(false);
export const mainPeer = writable(true);
export const mainid = writable("");
export const myid = writable("");
export const nameSent = writable(false);
export const myName = writable("qia qia");



export const profiles = writable({});




export function addProfile(id, newName) {
    profiles.update(dictionary => {
      dictionary[id] = { name: newName, points: 0 };
      return dictionary;
    });
  }

export function addPoints(id) {
    profiles.update(dictionary => {
      if (dictionary[id]) {
        dictionary[id].points += 1;
      }
      else {
        console.log("id not found")
      }
      return dictionary;
    });
  }

