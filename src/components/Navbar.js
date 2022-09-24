import React from 'react';

export default function Navbar({seta, setImg, a, setMoves}){
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
                <button onClick={()=>seta(
                    function shuffle(){
                        let tempArr = [...a].sort(()=> 0.5-Math.random())
                        let inv_count = 0
                        for(let i=0;i<15;i++)
                            for(let j=i+1;j<16;j++)
                                if(tempArr[j] && tempArr[i] && tempArr[i]>tempArr[j])
                                    inv_count += 1
                        let zin = tempArr.indexOf(0)
                        let zp
                        if(zin < 4) zp = 0
                        else if(zin > 3 && zin < 8) zp = 1
                        else if(zin > 7 && zin < 12) zp = 2
                        else zp = 3
                        if((inv_count + zp)%2 === 0)
                            return shuffle()
                        // console.log('shufled')
                        setMoves(0)
                        return tempArr
                    }
                )}>🔃</button>
            </div>
        </div>
    )
}
