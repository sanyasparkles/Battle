<script>

    import AudioPlayer from './AudioPlayer.svelte';
	import { tracks } from '../js/tracks.js';
	import CircleProgressBar from './CircleProgressBar.svelte'

    let time = 2 * 60;
</script>




<div class = "game center">
    <CircleProgressBar countdown={time} />
    <AudioPlayer />
</div>


<style>
    .game {
        margin-left: 4rem;
    }

   


</style>
