<script>
	import Modal from './Modal.svelte';
    import { myid, myName, nameSent, isGameStarted, newSong, isGameEnded, mainPeer } from "../js/store.js";
    import { onMount } from "svelte";
	let showModal = true;

    let nameComp;


    onMount(() => {
			// guessedTitle.focus();
			nameComp.onkeydown = (event) => {
				if (event.key === 'Enter') {
                    console.log("here")
                    showModal = false;
			  	}
			}
	});
</script>

{#if showModal}
<Modal bind:showModal>
	<h2 slot="header" class = "color">
		Welcome to Swiftie Battle!
	</h2>

	<p class="popup-text">
		Inspired by the games Heardle and Swiftle, Swiftie Battle tests your love of Taylor songs and allows you to battle against your friends to prove who is the ultimate swiftie!
    </p>

    <h3 class = "low color">
        Enter your Name
    </h3>
    <input class = "input" type="text" bind:this={nameComp} bind:value={$myName} placeholder="Enter Your Name">
    
	
</Modal>
{/if}

<style>


.low {
    margin-bottom: 5px;
}
.input {	
    text-align: center;
    background-color: #3c414a;
      border: none;
    align-items: center;
    align-content: center;
    width: 20em;
      padding: 14px 20px;
      text-decoration: none;
     margin: 0px 0px;
     margin-top: 0px;
    color: rgb(208, 205, 232);
      cursor: pointer;
    border-radius: 0.5em;
}

</style>