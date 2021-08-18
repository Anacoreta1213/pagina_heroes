import React from 'react';
import Portal from './Portal';

function ModalForm({children,toggle,active}) {


    return (
        <Portal>
        {active && (
        <div style={styles.wrapper}>
        <div style={styles.window}>
        <button className="btn btn-primary position-absolute top-0 end-0 mx-3 mt-1" onClick={toggle}>
            X
        </button>
        <div>
            {children}
        </div>
        </div>
        <div onClick={toggle} style={styles.back}></div>
        </div>  
        )

        }
        </Portal>
    )
}

const styles ={
    wrapper:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'200%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    window:{
        position:'relative',
        background:'#fff',
        borderRadius:5,
        padding:15,
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        zIndex:10,
        minWidth:320
    },
    back:{
        position:'absolute',
        width:'100%',
        height:'200%',
        top:0,
        left:0,
        background:'#000',
        opacity:0.4
    }

}

export default ModalForm
