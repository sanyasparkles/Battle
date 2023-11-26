<script>
    import { myid, mainid, mainPeer, isGameStarted, newSong, isGameEnded } from "../js/store.js";
    import {Peer} from 'peerjs'
  var peer = new Peer();
  var conn
  let link


 
  peer.on("open",(id)=>{
    $myid = id
    console.log(id)
  })

  
  
  

    //connect
  function connect() {
    //sending
    conn = peer.connect($mainid)
    conn.on("open",() => {
      console.log("connected")
    })
  }

  $: { if($isGameStarted) {
    conn = peer.connect($mainid)
    conn.on("open",() => {
      conn.send("start_game")
    })
        
    }  
  }   

  //receiving
  peer.on("connection",(conn)=>{
    conn.on("data",(data)=>{
      switch(data) {
        case "start_game":
        $isGameStarted = true;
      }
    })
  })



  </script>


  