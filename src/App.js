// Inspired By: https://codesandbox.io/embed/r5qmj8m6lq
import React, { useState } from 'react';
import clamp from 'lodash/clamp';
import isEqual from 'lodash/isEqual';
import swap from 'lodash-move';
import { useGesture } from 'react-with-gesture';
import { useSprings } from 'react-spring';
//import { superFancyEncrypter } from './helpers/decoder.helper';
import { userProfile } from './users/userProfile';
import  styles from './declarations/styles';
import getItemStyles from './declarations/getItemStyles';
import user from './declarations/user'
import { displayItems } from './presentation/displayItems';

/*const superFancyEncryptedMessage = `
Uryyb gurer! Gunaxf sbe chggvat va gur gvzr gb chyy qbja guvf cebwrpg naq eha vg! Vs lbh ner rkpvgrq gb 
pbagvahr gur Ernpg Qrirybcre vagreivrj cebprff jvgu Pbqr Unatne, rznvy hf ng qrif@pbqrunatne.vb jvgu gur 
fhowrpg yvar "Ernpg Qrirybcre Vagreivrj" gb erdhrfg lbhe arkg fgrcf. Cyrnfr vapyhqr lbhe tvguho hfreanzr 
fb jr pna funer n cevingr ercbfvgbel jvgu lbh.
`;*/

export function App(props) {
  const { items, correctOrder } = props;

  // Track the current indices representing the item order
  const [currentOrder, setCurrentOrder] = useState(items.map((item, index) => index));

  // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const [springs, setSprings] = useSprings(items.length, getItemStyles(currentOrder));

  // Store current order indices as a mutable array, to assist with animating without causing unnecessary re-renders
  let tempOrder = currentOrder;

  const bind = useGesture(({ down, delta, args }) => {
    const [originalIndex] = args;
    const [, y] = delta;
    const curIndex = tempOrder.indexOf(originalIndex);
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1);
    const newOrder = swap(tempOrder, curIndex, curRow);
    // Feed springs new style data
    setSprings(getItemStyles(newOrder, down, originalIndex, curIndex, y));
    if (!down) {
      tempOrder = newOrder;
      setCurrentOrder(newOrder);
    }
  });

  const itemFit = {
    springs_drag : springs,
    bind_item : bind,
    items_new: items
  };

  return (
    <div style={styles.container}>
      { displayItems(itemFit)}
      {isEqual(currentOrder, correctOrder) && (
        <div style={{ color: 'white', fontSize: 16, fontFamily: 'monospace' }}>
          {/* {superFancyEncrypter(superFancyEncryptedMessage)}*/ }
          { userProfile(user) }
        </div>
      )}
    </div>
  );
}
