import { Picker } from "@react-native-picker/picker";
import { Text } from "react-native";
import styles from "./styles";

interface PickerItemProps {
    tamanho: Array<{ key: string, label: string, value: string }>;
    tamanhoSelect: string;
    onChange: (moeda: string) => void;
}

export function PickerItem(props: PickerItemProps) {
    let moedas = props.tamanho.map((item, index) => {
        return (
            <Picker.Item
                key={index}
                label={item.label}
                value={item.value}
                style={styles.picketerItem}
            />
        );
    });
    return (
        <Picker
            style={styles.picker}
            selectedValue={props.tamanhoSelect}
            onValueChange={(itemValue) => props.onChange(itemValue)}>
            {moedas}
        </Picker>
    );
}

export function ListPlayerFlat(props: any) {
    return (
        <Text style={styles.flatList}>{props.index} - {props.data}</Text>
    );
}