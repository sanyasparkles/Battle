<script>
	import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from '../js/tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'
	import { myid, myName, nameSent, isGameStarted, newSong, isGameEnded, mainPeer } from "../js/store.js";
	import {createPeer, sendProfile, startGame} from "../js/networking.js"
    import { get } from 'svelte/store';
	import Icon from '@iconify/svelte';
	import {hearts} from '../js/hearts';
	import {onMount} from "svelte";
	
	let time = 2 * 60;

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
	Start Game
</button>
{:else}

<h3>Waiting for host to start</h3>

<!-- waiting for host to start -->
{/if}


<!-- {#if $isGameStarted && !$isGameEnded}
<div class = "centered">
	<CircleProgressBar countdown={time} />
	<AudioPlayer />
</div>
{/if} -->

<!-- <div class = "centered">
	<Points />
</div> -->


<style>


	.heart-button {
    background-color: transparent; /* Set background color to transparent */
    border: none; /* Remove border */
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margin */
  	}

	.start-button {
		padding: 1.2rem;
		margin-top: 2rem;
		background-color: #e8d6b7;
		color: #121212;
		font-size: 2rem; 
	}

	h1 {
		font-size: 6rem;
		margin-bottom: 1rem;
		margin-top: 0rem;
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