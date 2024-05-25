import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from './styles';

export type ITask = {
    name: string;
    isFinished: boolean;
    onCheck?: () => void;
    onRemove?: () => void;
}

export default function Task({ name, isFinished, onCheck, onRemove }: ITask) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onCheck}>
                {
                    !isFinished &&
                    <Image
                        source={require('../../../assets/ic_uncheck.png')} />
                }
                {
                    isFinished &&
                    <Image
                        source={require('../../../assets/ic_check.png')} />
                }
            </TouchableOpacity>

            {
                !isFinished &&
                <Text style={styles.txtTaskName}>
                    {name}
                </Text>
            }

            {
                isFinished &&
                <Text style={styles.txtTaskNameFinished}>
                    {name}
                </Text>
            }

            <TouchableOpacity onPress={onRemove}>
                <Image
                    source={require('../../../assets/ic_trash.png')} />
            </TouchableOpacity>
        </View>
    )
}