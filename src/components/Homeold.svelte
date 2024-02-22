<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from '../js/tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	import Points from './Points.svelte'
	import { myid, myName, nameSent, isGameStarted, newSong, isGameEnded, mainPeer } from "../js/store.js";
	import {createPeer, sendProfile, startGame} from "../js/networking.js"
    import { get } from 'svelte/store';
	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}
	let time = 2 * 60;

	var tyName

	$: $myName = tyName



	// $: {
	// 	if ($newSong === false) {
	// 		// console.log("NEW SONG FALSE")

	// 	}

	// 	if ($newSong === true) {
	// 		console.log("NEW SONG true")
			
	// 	}

	// 	// if ($newSong === true) {
	// 	// 	console.log("getting new songo")

	// 	// }
	// }
	

	
	
</script>



{#if !$isGameStarted && $mainPeer && $nameSent}
<button on:click={startGame}>
	Start Game
</button>
{/if}

{#if !$isGameStarted && !$nameSent}
	<input class = "input" type="text" bind:value={tyName} placeholder="Enter Your Name">
{/if}

<!-- {#if !$isGameStarted && !$nameSent}
<button on:click={sendProfile}>
	Join GameDJFKLASDJFKLSA
</button>

{/if} -->

{#if $isGameStarted && !$isGameEnded}
<div class = "centered">
	<CircleProgressBar countdown={time} />
	<AudioPlayer />
</div>
{/if}

<div class = "centered">
	<Points />
</div>



<style>
	.centered {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		gap: 0.5em;
		max-width: 40em;
		margin: 0 auto;
	}

	.input {	
		background-color: #3c414a;
  		border: none;
		align-items: center;
		width: 30em;
  		padding: 16px 32px;
  		text-decoration: none;
 		margin: 0px 0px;
		color: rgb(208, 205, 232);
  		cursor: pointer;
		border-radius: 0.5em;
	}
	
</style>