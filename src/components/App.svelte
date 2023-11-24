<script>
  import Audio from './Audio.svelte';
  import ShareLink from './ShareLink.svelte';

</script>

<main>
  <h1>Battle Networking</h1>
  
  <ShareLink />
  <Audio />


  

  <p class="read-the-docs">
    Click link to share with friends
  </p>
</main>

<style>
  :global(body) {
    background-color: #18181A; 
    color: #6395EC; 
  }
  

  .read-the-docs {
    color: #888;
  }
</style>



