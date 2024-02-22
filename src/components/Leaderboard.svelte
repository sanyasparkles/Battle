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


<!-- ADD BOX /DIFFERENT COLOR 
- CAN TRY DOING IT IN COLUMNS OR
- OTHER WAYS SIMILAR TO NAME INSIDE BOX + ROUNDED BOX ON OUTSIDE 
-->

{#if $profiles !== null}
<ul>
    {#each Object.keys($profiles) as id}
        <p class = "inlinee">{$profiles[id].name}</p>
        <p class = "inlinee">{$profiles[id].points}</p>
        <Icon class = "inlinee" icon={$profiles[id].heart} width=1rem />
    {/each}
</ul>
{/if}


<style>
.inlinee {
    display: inline-block;
}


</style>