<script>
  import Audio from './Home.svelte';
  import JoinLink from './JoinLink.svelte';
  import Leaderboard from './Leaderboard.svelte';
  import Popup from './Popup.svelte';
  import Home from './Home.svelte';

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
  

<div class = "row">
  <div class = "column left">
    <Leaderboard />
  </div>
  <div class = "column right">
    <Home />
  
    <Popup />
 
    <JoinLink />
  </div>
</div>


  <!-- <Audio /> -->

  


</main>

<style>

* {
  box-sizing: border-box;
}




.column {
  float: left;
  padding: 10px;
  
}

.left {
  width: 25%;
}

.right {
  width: 75%;
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



