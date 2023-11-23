<script>
    import { points} from "./store.js";




    $: {
        if ($points === 0) {
            console.log("ponits = 0")
        }
        if ($points === 1) {
            console.log("ponits = 1")
        }
        if ($points === 2) {
            console.log("ponits = 2")
        }

    }
</script>

<p>Score:</p>
<p>{$points}</p>

