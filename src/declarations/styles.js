const styles = {
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 400,
    },
    list: {
      position: 'relative',
      width: 320,
      height: 240,
    },
    item: {
      position: 'absolute',
      width: 320,
      height: 90,
      overflow: 'visible',
      pointerEvents: 'auto',
      transformOrigin: '50% 50% 0px',
      borderRadius: 5,
      color: '#FFF',
      fontWeight: 600,
      lineHeight: '90px',
      fontSize: 14.5,
      textTransform: 'uppercase',
      textAlign: 'center',
      letterSpacing: 2,
    },
  };

  export default styles;
  