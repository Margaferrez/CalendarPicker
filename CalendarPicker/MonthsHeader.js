import React from 'react';
import {
  View,
  Text,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

export default function MonthsHeader(props) {
  const {
    styles,
    textStyle,
    headingLevel,
    title,
  } = props;

  const accessibilityProps = { accessibilityRole: 'header' };
  if (Platform.OS === 'web') {
    accessibilityProps['aria-level'] = headingLevel;
  }

  return (
    <View style={styles.headerWrapper}>
      <View>
        <Text style={[styles.monthHeaderText, textStyle]}>
          { title }
        </Text>
      </View>
    </View>
  );
}

MonthsHeader.propTypes = {
  styles: PropTypes.shape(),
  textStyle: Text.propTypes.style,
  title: PropTypes.string
};
