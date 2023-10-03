<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from './tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	import { newSong } from '/store.js';
	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}
	let time = 2;

	let isGameStarted = false;

	function startGame() {
		isGameStarted=true;
	}


	$: {
		if ($newSong === false) {
			console.log("NEW SONG RECOGNIZED")
			newSong.set(true)
		}
	}
</script>

{#if !isGameStarted}
<button on:click={startGame}>
	Start Game
</button>
{/if}

{#if isGameStarted && $newSong}
<div class = "centered">
	<CircleProgressBar countdown={time} />
	<AudioPlayer track = {getRandomTrack()} />
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