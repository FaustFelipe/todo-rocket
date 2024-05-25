import { Text, View } from "react-native";

import { styles } from './styles';

type IProps = {
    isFinished: boolean;
    counting: number;
}

export default function Counter({ isFinished, counting }: IProps) {
    return (
        <View style={styles.container}>
            {
                !isFinished &&
                <Text style={styles.txtCounterTitleCreated}>
                    Criadas
                </Text>
            }
            {
                isFinished &&
                <Text style={styles.txtCounterTitleFinished}>
                    Concluídas
                </Text>
            }
            <View style={styles.containerCounter}>
                <Text style={styles.txtCounterQuantity}>
                    {counting}
                </Text>
            </View>
        </View>
    )
}