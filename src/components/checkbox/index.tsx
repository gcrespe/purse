import React from 'react';

import {ViewStyle, StyleProp, TouchableOpacity, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { color } from 'react-native-reanimated';

interface PropsCheck {
    value: boolean;
    setValue: (value: boolean) => void;
    loading?: boolean;
    style?: ViewStyle;
}

export const Check = (props: PropsCheck) => {
    const {value, setValue, loading, style} = props;
    return (
        <CheckBox
            value={value}
            onChange={() => setValue(!value)}
            style={{color: '#FFFFFF'}}
            disabled={loading}
        />
    );
};

interface CheckWithLabelProps extends PropsCheck {
    label: string;
}

export const CheckWithLabel = (props: CheckWithLabelProps) => {
    const {value, setValue, loading, style, label} = props;

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flex: 1,
                marginTop: 15,
            }}
            onPress={() => setValue(!value)}>
            <Check setValue={setValue} value={value} loading={loading} style={style} />
            <Text style={{fontSize: 12}}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};
