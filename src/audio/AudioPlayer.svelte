<script>
    import { onMount } from "svelte";
    import { tracks } from "./tracks";
	import { newSong } from '/Users/nmunjal/Downloads/Battle/public/store.js';

	export let track
	const src = track.src;
	const title = track.title;
	const songLength = track.songLength;

	let startTime = Math.floor(Math.random() * (songLength-20));

	let time = 0
	let paused = true;


	let audio;
	console.log(title)
	let guessedTitle; 
	onMount(() => {
		guessedTitle.addEventListener('keydown', (event) => {
			  if (event.key === 'Enter') {
				console.log("JFKLDASF", guessedTitle);
				if (title.toUpperCase() === guessedTitle.value.toUpperCase()) {
					console.log("guesed RIGHT", guessedTitle);
					audio.pause()
					newSong.set(false);
				}
			
			  }
			});
	}); 

	function handleAudioLoaded() {
    if (audio) {
      audio.currentTime = startTime;
      audio.play(); 
    }

	setTimeout(() => {
        audio.pause();
      }, 15 * 1000); 
    }
  

</script>

<div class="player" class:paused>

	<audio id="audio" bind:paused bind:currentTime={time} bind:this={audio} preload="metadata" on:loadedmetadata={handleAudioLoaded}>
		<source {src} />
		Your browser does not support the audio element.
	</audio>
	
	<div class="time">
			<div
				class="slider"
				on:pointerdown={e => {
					const div = e.currentTarget;
				}}
			>
				<div class="progress" style="--progress: {(time-startTime)/ 15}%" />
			</div>
		</div> 
	</div> 


	<div>
		<input class = "input" type="text" bind:this={guessedTitle} placeholder="Song Name">
	</div>

	


<style>

	.input {	
		background-color: #3c414a;
  		border: none;
		align-items: center;
		width: 30em;
  		padding: 16px 32px;
  		text-decoration: none;
 		margin: 0px 0px;
  		cursor: pointer;
		border-radius: 0.5em;
	}
	
	.player {
		display: grid;
		grid-template-columns: 2.5em 1fr;
		align-items: center;
		gap: 1em;
		padding: 0.5em 1em 0.5em 0.5em;
		border-radius: 2em;
		background: var(--bg-1);
		transition: filter 0.2s;
		color: var(--fg-3);
		user-select: none;
	}

	.player:not(.paused) {
		color: var(--fg-1);
		filter: drop-shadow(0.5em 0.5em 1em rgba(0,0,0,0.1));
	}
	
	button {
		width: 100%;
		aspect-ratio: 1;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		border-radius: 50%;
	}

	.time {
		width: 30em;
		display: flex;
		align-items: center;
		gap: 0.5em;
		display: flex;

	}

	.slider {
		align-items: center;
		flex: 1;
		height: 0.5em;
		background: #754d4d;
		border-radius: 0.5em;
		overflow: hidden;
		display: flex;
		

		
	}

	.progress {
		align-items: center;
		width: calc(100 * var(--progress));
		height: 100%;
		border-radius: 0.5em;
		background: #ffd8d8;
	}
</style>