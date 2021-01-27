import React from 'react';
import { View, Text } from 'react-native';

const kinds: any = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

enum KindEnum {
  info = 'info',
  positive = 'positive',
  negative = 'negative',
  warning = 'warning',
}

interface AlertStyledProps {
  kind: KindEnum;
}

const AlertStyled: React.FC<AlertStyledProps> = ({
  children,
  kind,
  ...rest
}) => (
  <View
    style={{
      padding: 20,
      borderRadius: 3,
      margin: 5,
      backgroundColor: kinds[kind],
    }}
    {...rest}
  >
    <Text style={{ color: 'white' }}>{children}</Text>
  </View>
);

export const Alert = (props: any) => <AlertStyled {...props} />;
