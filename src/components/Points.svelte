<script>
    import { myid, mainPeer, profiles, points} from "../js/store.js";
    import { startReceivingMain, sendProfile } from "../js/networking.js"


    $: {
        if ($myid != "") {
            sendProfile()
            if($mainPeer) {
                startReceivingMain()
            }
        }
        

    }
    
    
    
</script>


<ul>
    {#each Object.keys($profiles) as id}
        <p>{$profiles[id].name}</p>
        <p>{$profiles[id].points}</p>
    {/each}
</ul>