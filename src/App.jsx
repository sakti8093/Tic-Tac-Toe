import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { FaRegCircle } from 'react-icons/fa';

function App() {

  let temp=Array(9).fill(-1)
  let [arr,setArr]=useState(temp)
  let [playerObj,setPlayerObj]=useState({player1:"",player2:""});
  let [player,setPlayer]=useState(0)
  const handleClick=(i)=>{

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

  const handleSubmit=() =>{
    
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
    if(check){
      if(player==0){
        alert(player + "wins")
        temp=Array(9).fill(-1)
        setArr(temp)
      }else{
        alert(player + "wins")
        temp=Array(9).fill(-1)
        setArr(temp)
      }
    }
  }

  return (
    <div id='parent'>
      <form onSubmit={handleSubmit} >
        <input name='player1' placeholder='Enter Player 1 name' required value={setPlayerObj.player1} onChange={handleChange}  /> 
        <input name='player2' placeholder='Enter Player 2 name' required value={setPlayerObj.player2} onChange={handleChange} /> 
        <button>SUBMIT</button>
      </form>
    <h1>TIC-TAC-TOE</h1>
    <div id='player_detail'>

    </div>
    <div className='App'  >
    
      {arr.map((elem,index)=>(
        <div className='container' style={{ backgroundColor: elem==0?"red":elem==1?"yellow":"pink"  }} onClick={()=>handleClick(index)} >{elem==0?<ImCross/>:elem==1?<FaRegCircle/>:""}</div>
      ))}
    </div>
    </div>
  );
 
}

export default App;
