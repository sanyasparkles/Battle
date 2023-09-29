<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from './tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}
	let time = 2;
	let count;

	function startGame() {
		//show elemeents
	}

	$: {
    if (count === 0) {
      
      //time up screen w/ results
    }
	}
</script>

<button on:click={startGame}>
	Start Game
</button>

<div class = "centered">
	<AudioPlayer track = {getRandomTrack()} />
</div>

<CircleProgressBar count={count} countdown={time} />


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