<script>
    import {myid, mainid, mainPeer} from '../js/store.js'
    let link

      //sets as either main or side peer
    const urlParams = new URLSearchParams(window.location.search);
    $mainid = urlParams.get('myid')


    $: {
        if ($mainid === null) {
            $mainPeer = true;
            console.log("main")
        }

        else if ($mainid !== null && $mainid !== "") {
            $mainPeer = false;
            console.log("main is ", mainid)
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