import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

function generateArc(per, r) {
  const percentage = per === 100 ? 99.999 : per;
  const a = (percentage * 2) * (Math.PI / 100);// angle (in radian) depends on percentage
  const rx = r;
  const ry = r;
  const xAxisRotation = 0;
  let largeArcFlag = 1;
  const sweepFlag = 1;
  const x = r + (r * Math.sin(a));
  const y = r - (r * Math.cos(a));
  largeArcFlag = percentage <= 50 ? 0 : 1;
  return `A${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}`;
}

const CircularProgress = ({ percentage = 60, blankColor = '#eaeaea', donutColor = '#43cdcf',
  fillColor = 'white', progressWidth = 10, size = 40, children }) => {
  const half = size / 2;
  console.log('chilred', children);

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Circle cx={half} cy={half} r={half} fill={blankColor} />
        <Path
          d={`M${half} ${half} L${half} 0 ${generateArc(percentage, half)} Z`}
          fill={donutColor}
        />
        {<Circle cx={half} cy={half} r={progressWidth} fill={fillColor} />}
      </Svg>
      <View style={styles.textView}>
        {children}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  textView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 1,
  }
});

export { CircularProgress };
