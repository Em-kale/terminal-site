import { drawerClasses } from '@mui/material'
import SelectInput from '@mui/material/Select/SelectInput'
import React, {useRef, useLayoutEffect, useEffect} from 'react'

const Matrix = (props) => {
    const canvasRef = useRef(null)
    const height = window.innerHeight;
    const width = window.innerWidth;



    const alphabet = "01"
    const fontSize = "7"
    const columns = width / fontSize

    const rainDrops = [];

    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }


    function draw(context){
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, width, height);
    
        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';
    
        for(let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
    
            if(rainDrops[i]*fontSize > height && Math.random() > 0.975){
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        
        }
        
    }
    useEffect(()=>{
      
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const render = () => {
            draw(context)
            window.requestAnimationFrame(
                function(){
                    setTimeout(render, 25)
                })
        }
        
        render()
    }, [draw])

    return (
        <canvas 
        ref={canvasRef}
        style={{
            height: "100vh",
            width: "100vw"
        }}
        ></canvas>
    )
}

export default Matrix