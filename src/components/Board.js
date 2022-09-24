import React, { useEffect } from "react";
import Tile from './Tile'

export default function Board({a, seta, img, setWon, setMoves}){
    
    useEffect(()=>{
        seta(() => shuffle())
        //shuffle()
        // seta([1,2,3,4,5,6,7,8,9,10,11,12,13,14,0,15])
      },[])
    let tiles = a.map(n => (
        <Tile value={n} clickHandler={move} key={Math.random()} img={img} />
    ))
    function move(val){
        let x = a.indexOf(val)
        let z = a.indexOf(0)
        if((x+4 === z || x-4 === z)||((x+1 === z && z%4 !== 0)|| (x-1 === z && (z+1)%4 !== 0))){
            seta(()=>swap(a,x,z))
            setMoves((prev)=>(prev = prev+1))
        }    
    }
    function swap(arr,x,z){
        let ta = [...arr]
        ta[z] = arr[x]
        ta[x] = 0
        // seta(()=> [...ta]) 
        if(JSON.stringify(ta) === JSON.stringify([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]))
                setWon(true)
        return [...ta]
    }
    function shuffle(){
        let tempArr = [...a].sort(()=> 0.5-Math.random())
        if(tempArr.indexOf(15) < tempArr.indexOf(14)){
            let temp = tempArr.indexOf(14)
            tempArr[tempArr.indexOf(15)] = 14
            tempArr[temp] = 15
        }
        return tempArr
        // // let zi,top,bottom,left,right,d
        // // for(let i=0;i<100;i++){
        // //     setInterval(()=>{
        // //         d = null
        // //         zi = a.indexOf(0)
        // //         top = zi-4 >= 0 ? zi-4 : null
        // //         bottom = zi+4 <= 15 ? zi+4 : null
        // //         left = (zi-1 >= 0)&&(zi%4 != 0) ? zi-1 : null
        // //         right = (zi+1 <= 15)&&(zi%4 != 3) ? zi+1 : null
        // //         while(d != null)
        // //             d = Math.floor(Math.random()%4)
        // //         switch(d){
        // //             case 0: swap(zi,top); 
        // //             case 1: swap(zi,bottom); 
        // //             case 2: swap(zi,left);
        // //             case 3: swap(zi,right);
        // //         }
        // //     },500)
        // // }

        // let ta = [...a].sort((p,q)=> q-p)
        // console.log('once',[...ta])
        // // ta = swap(ta,1,2)
        // function swap2(i1,i2){
        //     let temp = ta[i1]
        //     ta[i1] = ta[i2]
        //     ta[i2] = temp
        //     console.log('swap2',[...ta])
        //     return ta
        // }
        // ta = swap2(ta.indexOf(14),ta.indexOf(15))
        // let zi,top,bottom,left,right,d
        // for(let i=0;i<10;i++){
        //     d = null
        //     zi = a.indexOf(0)
        //     top = zi-4 >= 0 ? zi-4 : null
        //     bottom = zi+4 <= 15 ? zi+4 : null
        //     left = (zi-1 >= 0)&&(zi%4 !== 0) ? zi-1 : null
        //     right = (zi+1 <= 15)&&(zi%4 !== 3) ? zi+1 : null
        //     while(d != null)
        //         d = Math.floor(Math.random()%4)
        //     switch(d){
        //         case 0: ta = swap2(zi,top); continue;
        //         case 1: ta = swap2(zi,bottom); continue;
        //         case 2: ta = swap2(zi,left); continue;
        //         case 3: ta = swap2(zi,right); continue;
        //     }
        //     //console.log(ta)
        // }
        //return ta
    }
    return(
        <div className="board">
            {tiles}
        </div>
    )
}