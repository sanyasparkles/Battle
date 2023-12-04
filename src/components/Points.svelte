<script>
    import { myid, mainPeer, profiles, points} from "../js/store.js";
    import { startReceivingMain, sendProfile, createPeer } from "../js/networking.js"


    // createPeer
    // $: {
    //     if ($myid != "") {
    //         if($mainPeer) {
    //             startReceivingMain()
    //         }
    //         sendProfile()
            
            
    //     }
        

    // }
    
    
    
</script>


<ul>
    {#each Object.keys($profiles) as id}
        <p>{$profiles[id].name}</p>
        <p>{$profiles[id].points}</p>
    {/each}
</ul>