<script>
  import Audio from './Home.svelte';
  import JoinLink from './JoinLink.svelte';
  import Leaderboard from './Leaderboard.svelte';
  import Popup from './Popup.svelte';
  import Home from './Home.svelte';
  import {isGameStarted, isGameEnded, showGame, showHome, showPopup, showResults} from '../js/store.js'
  import Game from './Game.svelte';
  import Results from './Results.svelte';

</script>

<meta name="viewport" content="width=device-width, initial-scale=1">

<main>


  <!-- <div class="row">
    <div class="column left" >
      <h2>Column 1</h2>
      <p>Some text..</p>
    </div>
    <div class="column right">
      <h2>Column 2</h2>
      <p>Some text..</p>
    </div>
  </div> -->
  
<!-- {#if $showPopup}
  <Popup />
{/if}


{#if !$isGameEnded}
<div class = "row">
  <div class = "column left">
    <Leaderboard />
  </div>
  <div class = "column right">
    {#if !$isGameStarted}
    <Home />
    <JoinLink />
    {:else}
    <Game />
    {/if}

  </div>
</div>
{/if}


{#if !$isGameStarted}
  <Results />
{/if} -->


<Results />
  


</main>

<style>


* {
  box-sizing: border-box;
}


.column {
  float: left;
  padding: 0px;
  
}

.left {
  width: 25%;
  background-color: #e8d6b7;
  /* opacity: 1; */
  border-radius: 30px;
}

.right {
  width: 75%;
}


.row {

}
.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
  }
}

:global(body) {
    background-color: #18181A; 
    color: #6395EC; 
} 
  

</style>



