<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from './tracks.js';
	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}
	const randomTrack = getRandomTrack();
</script>

<div class = "centered">
	<AudioPlayer track = {getRandomTrack()} />
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
</style>