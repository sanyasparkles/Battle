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


{#if $profiles !== null}
<ul>
    {#each Object.keys($profiles) as id}
        <p>{$profiles[id].name}</p>
        <p>{$profiles[id].points}</p>
        <Icon icon={$profiles[id].heart} width=1rem />

    {/each}
</ul>
{/if}