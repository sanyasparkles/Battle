<script>
    import {isGameStarted, myid, mainid, mainPeer} from '../js/store.js'
    import Icon from '@iconify/svelte';
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

<div>
    {#if $mainPeer && !$isGameStarted} 
        {#if $myid !== ''}
            <!-- <p> {link} </p> -->
            <button class="join-link" on:click={copyToClipboard}>
                {clicked ? 'Join Link (copied)' : 'Share with Friends'}
                <Icon icon="material-symbols:share" />
            </button>
            
        {:else}
            <p class="waiting">Enter Name to get Join Link...</p>
        {/if}
    {/if}
</div>


  

<style>
  
  
    .join-link {
        padding: 1.2rem;
		margin-top: 2rem;
		background-color: #e8d6b7;
		color: #121212;
		font-size: 2rem;
    }

    .join-link:hover {
      cursor: pointer;
    }
  </style>