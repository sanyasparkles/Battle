<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from '../js/tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	import Points from './Points.svelte'
	import { myid, myName, nameSent, isGameStarted, newSong, isGameEnded, mainPeer } from "../js/store.js";
	import {createPeer, sendProfile, startGame} from "../js/networking.js"
    import { get } from 'svelte/store';
	import Icon from '@iconify/svelte';
	import {hearts} from '../js/hearts';
	import {onMount} from "svelte";
	

	let heartColor;

	
	function handleClick(name) {
		console.log(name);
	}
	
	
</script>

<h1 class = "color">
	Pick Your Icon
</h1>


<!-- row of heart buttons!!! -->
<!-- <button on:click={handleClick}>
	<Icon class="hearts" icon={hearts[0]} width="3rem" />
  </button> -->

<ul class = "hearts">
    {#each hearts as heartName}
	<button class = "heart-button" on:click={() => handleClick(heartName)}>
		<Icon icon={heartName} width=3.5rem />
	</button>	

    {/each}
</ul>


{#if $mainPeer}
<!-- start button -->
<button class = "start-button" on:click={startGame}>
	Start Game HERE
</button>
{:else}

<h3>Waiting for host to start</h3>

<!-- waiting for host to start -->
{/if}






<style>


	.heart-button {
    background-color: transparent; /* Set background color to transparent */
    border: none; /* Remove border */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margin */
  	}

	.start-button {
		
	}

	h1 {
		font-size: 7rem;
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