<script>
    import {isGameStarted, myid, mainid, mainPeer} from '../js/store.js'
    let link

      //sets as either main or side peer
    const urlParams = new URLSearchParams(window.location.search);
    $mainid = urlParams.get('myid')


        if ($mainid === null) {
            $mainPeer = true
            // console.log('ismain')
        }
        else if ($mainid !== null && $mainid !== "") {
            $mainPeer = false;
            // console.log('isnotmain')

        } 
    
    const currentURL = window.location.href.split('?')[0];
    $: link = `${currentURL}?myid=${$myid}`
    // console.log(link)

    let clicked = false
    const copyToClipboard = () => {
        navigator.clipboard.writeText(link);
        clicked = true;
    };


    
 
</script>

<div class="join-link">
    {#if $mainPeer && !$isGameStarted} 
        {#if $myid !== ''}
            <p> {link} </p>
            <button class="join-link" on:click={copyToClipboard}>
                {clicked ? 'Join Link (copied)' : 'Copy Join Link'}
            </button>
            <h1></h1>
            
        {:else}
            <p class="waiting">Enter Name to get Join Link...</p>
        {/if}
    {/if}
</div>


  

<style>
  
    .join-link:hover {
      cursor: pointer;
    }
  </style>