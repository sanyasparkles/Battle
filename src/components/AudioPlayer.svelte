<script>
    import { onMount } from "svelte";
    import { tracks } from "../js/tracks.js";
	import { mainPeer, currTrack, currStartTime, myid, newSong, points, profiles} from "../js/store.js";
	import { until, getNewSong, receivePointWinner, receiveSong, sendToAll} from "../js/networking.js";
    import { get } from "svelte/store";

	export const poo = ''

	let firstSong = true

	let track, startTime, src, title, songLength, time, paused, audio, guessedTitle, prevTrack
	let overtime = true




	$: {
		if ($newSong) {

			track = $currTrack
			startTime = $currStartTime
			// if (audio) {
			// 	audio.pause()
			// }
			console.log(track.title)

			if (!firstSong) {
				guessedTitle.value = ""
			}
				
			playNewRandomTrack()

		}
	}
	

	$: {
		if (time - startTime >= 15 && overtime) {
			guessedTitle.value = ""
			if ($mainPeer) {
				getNewSong()
				overtime = false
			}
		}
	}

	
	async function playNewRandomTrack() {
		firstSong = false;
		time = 0
		overtime = true;
		src = track.src;
		title = track.title;
		// console.log("title ", title)

		
		paused = true;

		
		
	}

	onMount(() => {
			// guessedTitle.focus();
			
			guessedTitle.onkeydown = (event) => {
				if (event.key === 'Enter') {
					if (title.toUpperCase() === guessedTitle.value.toUpperCase()) {
						sendToAll({winner: $myid})
						if ($mainPeer) {
							$profiles[$myid].points++
							getNewSong()
						}
					}
			
			  	}
			}
	});
		
	

	// setTimeout(() => {
	// 	if (audio) {
    //     	audio.pause();
	// 	}
    // }, 60 * 3 * 1000);



	function handleAudioLoaded() {
    	if (audio) {
      		audio.currentTime = startTime;
		
      		audio.play(); 
    	}
	}
  

</script>

<div class="player centered" class:paused>

	<audio id="audio" src={src} bind:paused bind:currentTime={time} bind:this={audio} preload="metadata" on:loadedmetadata={handleAudioLoaded}>
		<source {src}/>
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
	
	.centered {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		gap: 0.5em;
		max-width: 40em;
		margin: 0 auto;
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