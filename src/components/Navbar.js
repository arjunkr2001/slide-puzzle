import React from 'react';

export default function Navbar({seta, setImg}){
    return(
        <div className="nav"style={{
            height: '60px',
            width: '100vw',
            background: 'cyan',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            
            boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.5)',
            position: 'fixed',
            top: '0'
        }}>
            Slide Puzzle
            <div>
                <button onClick={()=>setImg(false)}>🔢</button>
                <button onClick={()=>setImg(true)}>🖼</button>
                <button onClick={()=>seta(()=>{
                 let tempArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].sort(()=> 0.5-Math.random())
                 //if(tempArr.indexOf(15) < tempArr.indexOf(14)){
                    let temp = tempArr.indexOf(14)
                    tempArr[tempArr.indexOf(15)] = 14
                    tempArr[temp] = 15
                 //}
                 return tempArr
                })}>🔃</button>
            </div>
        </div>
    )
}
