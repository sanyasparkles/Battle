<script>
    import { tracks } from "./tracks";

	export let track
	const src = track.src;
	const title = track.title;
	const songLength = track.songLength;

	let startTime = Math.floor(Math.random() * (songLength-20));

	let time = 0
	let paused = true;

	let audio;
	console.log(title)
	let guessedTitle = "";

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


	
	<div class = "input">
		<script>
			let inputValue = '';

			function handleKeyDown(event) {
  				if (event.key === 'Enter') {
				alert(`Entered value: ${inputValue}`);
				const audio = document.getElementById('audio');
        		if (audio) {
          			audio.stop(); 
        		}
  			}
}

		</script>
		<input type="text" bind:value={inputValue} on:keydown={handleKeyDown} placeholder="Song Name"/>
		
	</div>

	


<style>

	.input {	
		background-color: #04AA6D;
  		border: none;
  		/* color: white; */
  		padding: 16px 32px;
  		text-decoration: none;
 		 margin: 4px 2px;
  		cursor: pointer;
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
		flex: 1;
		height: 0.5em;
		background: #754d4d;
		border-radius: 0.5em;
		overflow: hidden;

	}

	.progress {
		width: calc(100 * var(--progress));
		height: 100%;
		background: #ffd8d8;
	}
</style>