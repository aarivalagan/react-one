const getItemStyles = (order, down, originalIndex, curIndex, y) => index => {
    return down && index === originalIndex // if mouse down and current item
      ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
      : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false };
  };

export default getItemStyles; 