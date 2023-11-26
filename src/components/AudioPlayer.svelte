<script>
    import { onMount } from "svelte";
    import { tracks } from "../js/tracks.js";
	import { newSong, points} from "../js/store.js";

	// $: {
    //     if ($points === 0) {
    //         console.log("OROIGONAPOOINTS = 0")
    //     }
    //     if ($points === 1) {
    //         console.log("OROIGONAPOOINTS = 1")
    //     }
    //     if ($points === 2) {
    //         console.log("OROIGONAPOOINTS = 2")
    //     }

    // }

	function getRandomTrack() {
  		const randomIndex = Math.floor(Math.random() * tracks.length);
  		return tracks[randomIndex];
	}


	let track, src, title, songLength, startTime, time, paused, audio, guessedTitle
	// let newSong = true

	$: { 
		if ($newSong) {
			// console.log("DJFSKADJSFKL;SADFAJSF;AS")
			playNewRandomTrack();
		}
	}

	$: {
		if (time - startTime >= 15) {
			guessedTitle.value = ""
			$newSong = false;
			$newSong = true;
		}
	}

	function playNewRandomTrack() {

		track = getRandomTrack()
		src = track.src;
		title = track.title;
		songLength = track.songLength;

		startTime = Math.floor(Math.random() * (songLength-20));

		time = 0
		paused = true;

		console.log(title)
		
		onMount(() => {
			guessedTitle.addEventListener('keydown', (event) => {
				if (event.key === 'Enter') {
					if (title.toUpperCase() === guessedTitle.value.toUpperCase()) {
						$points++
						
						audio.pause()
						$newSong = false;
						$newSong = true;
						guessedTitle.value = ""
					}
			
			  	}
			});
		}); 
		

		// setTimeout(() => {
        // 	newSong = false;
		// 	newSong = true;
    	// }, 15 * 1000);


    	

	}

	setTimeout(() => {
        audio.pause();
    }, 60 * 3 * 1000);



	function handleAudioLoaded() {
    	if (audio) {
      		audio.currentTime = startTime;
			// console.log("start time: ", startTime)
			// console.log("just time: ", time)
      		audio.play(); 
    	}
	}
  

</script>

<div class="player" class:paused>

	<audio id="audio" src={src} bind:paused bind:currentTime={time} bind:this={audio} preload="metadata" on:loadedmetadata={handleAudioLoaded}>
		<!-- <source {src}/> -->
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
		color: rgb(208, 205, 232);
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