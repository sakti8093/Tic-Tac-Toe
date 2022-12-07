import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { FaRegCircle } from 'react-icons/fa';
import my_song from './my_song.mp3'

function App() {

  let temp=Array(9).fill(-1)
  let [arr,setArr]=useState(temp)
  let [playerObj,setPlayerObj]=useState({player1:"",player2:""});
  let [player,setPlayer]=useState(0)
  let [start,setStart]=useState(false)

  let [song,setSong]=useState(new Audio(my_song))

  const handleClick=(i)=>{

    if(!start){
     return alert("Click start button")
    }

    if(arr[i]==0 || arr[i]==1){
      alert("Already filled !!");
    }else{
      if(player==0){
        arr[i]=0;
        setArr(arr)
        setPlayer(1);
        check();
      }else if(player==1){
        arr[i]=1;
        setArr(arr);
        setPlayer(0)
        check();
      }
    }

  }

 

  const handleChange=(e) => {
      let {name,value} = e.target;
      setPlayerObj({...playerObj,[name]:value})
  }

  const handleSubmit=(e) =>{
    e.preventDefault();
    setStart(true);
    song.play();
  }

  const handleAudioStop=() => {
    song.pause();
  }



  const check=()=>{
    let check=false;
    if(arr[0]==arr[1] && arr[1]==arr[2] && arr[0]!=-1 && arr[1]!=-1 && arr[2]!=-1){
      check=true;
    }else if(arr[3]==arr[4] && arr[4]==arr[5] && arr[3]!=-1 && arr[4]!=-1 && arr[5]!=-1){
      check=true;
    }else if(arr[6]==arr[7] && arr[7]==arr[8] && arr[6]!=-1 && arr[7]!=-1 && arr[8]!=-1){
      check=true;
    }else if(arr[0]==arr[3]&& arr[3]==arr[6] && arr[0]!=-1 && arr[3]!=-1 && arr[6]!=-1){
      check=true;
    }else if(arr[1]==arr[4]&& arr[4]==arr[7] && arr[1]!=-1 && arr[4]!=-1 && arr[7]!=-1){
      check=true;
    }else if(arr[2]==arr[5]&& arr[5]==arr[8] && arr[2]!=-1 && arr[5]!=-1 && arr[8]!=-1){
      check=true;
    }else if(arr[0]==arr[4]&& arr[4]==arr[8] && arr[0]!=-1 && arr[4]!=-1 && arr[8]!=-1){
      check=true;
    }else if(arr[2]==arr[4]&& arr[4]==arr[6] && arr[2]!=-1 && arr[4]!=-1 && arr[6]!=-1){
      check=true;
    }
    let tie=false;
    for(let i=0;i<arr.length;i++){
      if(arr[i]==0 || arr[i]==1){
        tie=true;
      }else{
        tie=false;
        break
      }
    }
    if(tie){
      alert("Its a tie")
        temp=Array(9).fill(-1)
        setArr(temp);
        
        setStart(false);
        return
    }
    if(check){
      if(player==0){
        alert(playerObj.player1 + " wins")
        temp=Array(9).fill(-1)
        setArr(temp)
        setStart(false);
      }else{
        alert(playerObj.player2  + " wins")
        temp=Array(9).fill(-1)
        setArr(temp)
        setStart(false);
      }
    }
  }

  return (
    <div id='parent'>
        <h1>TIC-TAC-TOE</h1>
      <form onSubmit={handleSubmit} >
        <input name='player1' placeholder='Enter Player 1 name' required value={setPlayerObj.player1} onChange={handleChange}  /> 
        <input name='player2' placeholder='Enter Player 2 name' required value={setPlayerObj.player2} onChange={handleChange} /> 
        <p>Note: Player 1 will be starting first</p>
        <button>START</button>
      </form>
  
    <div id='player_detail'>
       {start?<> <h3>PLAYER1: <span id='player1'>{playerObj.player1}</span></h3>
        <h3>PLAYER2: <span id='player2'>{playerObj.player2}</span> </h3>
        <h1>{player==0?`${playerObj.player1} turn`:`${playerObj.player2} turn` }</h1>
        <button onClick={handleAudioStop}>stop sound !!</button>
        </>:<></>}
   
    </div>
    <div className='App'  >
    
      {arr.map((elem,index)=>(
        <div className='container' style={{ backgroundColor: elem==0?"red":elem==1?"green":"pink"  }} onClick={()=>handleClick(index)} >{elem==0?<h1><ImCross/></h1>:elem==1?<h1><FaRegCircle/></h1>:""}</div>
      ))}
    </div>
    </div>
  );
 
}

export default App;
