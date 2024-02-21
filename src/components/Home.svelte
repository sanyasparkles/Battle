<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from '../js/tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	import Points from './Points.svelte'
	import { myid, myName, nameSent, isGameStarted, newSong, isGameEnded, mainPeer } from "../js/store.js";
	import {createPeer, sendProfile, startGame} from "../js/networking.js"
    import { get } from 'svelte/store';


	
	
</script>

<h1 class = "color">
	Pick Your Icon
</h1>




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
	
</style>