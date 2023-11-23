<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from '../js/tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	import Points from './Points.svelte'
	import { newSong, isGameEnded } from "../js/store.js";
	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}
	let time = 10;

	let isGameStarted = false;

	function startGame() {
		isGameStarted=true;
	}

	let audioX = null
	// audioX = new AudioPlayer()

	$: {
		if ($newSong === false) {
			console.log("NEW SONG FALSE")

		}

		if ($newSong === true) {
			console.log("NEW SONG true")
			
		}

		// if ($newSong === true) {
		// 	console.log("getting new songo")

		// }
	}
	

	
	
</script>



{#if !isGameStarted}
<button on:click={startGame}>
	Start Game
</button>
{/if}

{#if isGameStarted && !$isGameEnded}
<div class = "centered">
	<CircleProgressBar countdown={time} />
	<AudioPlayer />
	<Points />
</div>
{/if}




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
</style>