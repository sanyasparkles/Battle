<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from './tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}
	let time = 2;
</script>

<div class = "centered">
	<AudioPlayer track = {getRandomTrack()} />
</div>

<CircleProgressBar countdown={time} />


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