<script>
    import { myid, mainPeer, profiles, points} from "../js/store.js";
    import { startReceivingMain, sendProfile, createPeer } from "../js/networking.js"
    import Icon from '@iconify/svelte';
	import {hearts} from '../js/hearts';

    // createPeer
    // $: {
    //     if ($myid != "") {
    //         if($mainPeer) {
    //             startReceivingMain()
    //         }
    //         sendProfile()
            
            
    //     }
        

    // }

    $: {
        if ($profiles !== null) {
            // console.log("profiles ", $profiles)
        }
    }


    
    
    
</script>


<!-- FIND WAY TO CENTER AND PUT 


GET POINTS INSIDE OF HEART
-->

{#if $profiles !== null}
<ul>
    {#each Object.keys($profiles) as id}
    <div class = "margins">
        <h2 class = "inlinee">{$profiles[id].name}</h2>
        <h2 class = "inlinee">{$profiles[id].points}</h2>
        <Icon class = "inlinee" icon={$profiles[id].heart} width=1.6rem />
        <br>
    </div>
    {/each}
</ul>
{/if}


<style>


.inlinee {
    display: inline-block;
    font-size: 1.5rem; 
    color: darkslategrey;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
   
}


    



</style>