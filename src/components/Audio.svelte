<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from '../js/tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	import Points from './Points.svelte'
	import { isGameStarted, newSong, isGameEnded } from "../js/store.js";
	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}
	let time = 2 * 60;

	

	function startGame() {
		$isGameStarted=true;
	}

	

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



{#if !$isGameStarted}
<button on:click={startGame}>
	Start Game
</button>
{/if}

{#if $isGameStarted && !$isGameEnded}
<div class = "centered">
	<CircleProgressBar countdown={time} />
	<AudioPlayer />
</div>
{/if}

{#if $isGameStarted}
<div class = "centered">
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