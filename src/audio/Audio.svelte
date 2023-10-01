<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from './tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}
	let time = 2;
	let count = 1;

	let isGameStarted = false;
	function startGame() {
		isGameStarted=true;
	}

	$: {
    if (count === 0) {
		console.log("yay we good");
      //time up screen w/ results
    }
	}
</script>

{#if !isGameStarted}
<button on:click={startGame}>
	Start Game
</button>
{/if}

{#if isGameStarted}

<div class = "centered">
	<CircleProgressBar count={count} countdown={time} />
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