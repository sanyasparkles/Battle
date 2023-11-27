<script>
    import {myid, mainid, mainPeer} from '../js/store.js'
    import sendToMain from './Networking.svelte'
    let link

      //sets as either main or side peer
    const urlParams = new URLSearchParams(window.location.search);
    $mainid = urlParams.get('myid')


    $: {
        if ($mainid === null) {
            $mainPeer = true
        }
        else if ($mainid !== null && $mainid !== "") {
            $mainPeer = false;
        } 
    }
    const currentURL = window.location.href.split('?')[0];
    $: link = `${currentURL}?myid=${$myid}`
    console.log(link)
 
</script>

<div class="join-link">
    {#if $mainPeer} 
        {#if $myid !== ''}
            <p> {link} </p>
        {:else}
            <p class="waiting">Acquiring join link...</p>
        {/if}
    {/if}
</div>


<style>
  
    .join-link:hover {
      cursor: pointer;
    }
  </style>