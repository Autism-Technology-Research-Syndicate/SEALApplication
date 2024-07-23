//import {useStyles, createStyleSheet} from 'styles';
import {StyleSheet,View, Text} from 'react-native';

export interface Group143Props {
  /** Used to locate this view in end-to-end tests. */
  testID?: string,
}

export function WelcometoSEAL(props: Group143Props) {

  return (
    <View style={styles.root} testID={props.testID ?? "2066:1425"}>
      <View style={styles.group173} testID="2066:1424">
        <View style={styles.rectangle3138} testID="73:917"/>
        <Text style={styles.learnerLogin} testID="73:918">
          {`Learner login`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: 297,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  rectangle3138: {
    width: 297,
    height: 50,
    flexShrink: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'rgba(48, 80, 112, 1)',
  },
  learnerLogin: {
    width: 297,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
    color: 'rgba(245, 245, 245, 1)',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  group173: {
    width: 297,
    height: 50,
    flexShrink: 0,
  },
});
