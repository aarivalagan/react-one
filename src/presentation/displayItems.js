import React from 'react';
import { animated, interpolate } from 'react-spring';
import  styles from '../declarations/styles';


export function displayItems(props){
    const { springs_drag, bind_item, items_new } = props;
    //console.log(items_new);
    return(
        <div style={{ ...styles.list, height: items_new.length * 100 }} className="content">
        {springs_drag.map(({ zIndex, shadow, y, scale }, i) => {
            return (
            <animated.div
              key={i}
              {...bind_item(i)}
              style={{
                ...styles.item,
                zIndex,
                boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
                transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`),
              }}
              children={items_new[i]}
            />
          );
        })}
    </div>
    );
}