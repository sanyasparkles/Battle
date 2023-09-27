<script>
	export let track
	const src = track.src;
	const title = track.title;
	const songLength = track.songLength;

	let time = Math.floor(Math.random() * (songLength-20));
	let paused = true;
	console.log(title)
	console.log(time)
	let guessedTitle = '';

</script>

<div class="player" class:paused>
	<audio
		{src}
		bind:currentTime={time}
		bind:paused
		preload="metadata"
	/>
	
	<button
		class="play"
		aria-label={paused ? 'play' : 'pause'}
		on:click={() => paused = !paused}
	/>

	
	<div class="time">
			<div
				class="slider"
				on:pointerdown={e => {
					const div = e.currentTarget;
				}}
			>
				<div class="progress" style="--progress: {time / 15}%" />
			</div>
		</div> 
	</div> 


	<div class = "input">
		<input type="text" bind:value={guessedTitle} placeholder="Type the Name">
		<script>
			const textInput = document.getElementById('textInput');
			guessedTitle.addEventListener('keydown', (event) => {
			  if (event.key === 'Enter') {
				pased = !paused
				console.log('Enter key pressed!');
				// Perform desired actions here
			  }
			});
		  </script>
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
	
	[aria-label="pause"] {
		background-image: url(./pause.svg);
	} 

	[aria-label="play"] {
		background-image: url(./play.svg);
	}

	.time {
		display: flex;
		align-items: center;
		gap: 0.5em;
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