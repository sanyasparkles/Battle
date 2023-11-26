import { writable } from 'svelte/store';

export const newSong = writable(true);
export const points = writable(0);
export const isGameStarted = writable(false);
export const isGameEnded = writable(false);
export const mainPeer = writable(true);
export const mainid = writable("");
export const myid = writable("");


