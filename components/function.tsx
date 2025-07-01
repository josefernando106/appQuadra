import { Picker } from "@react-native-picker/picker";

interface PickerItemProps {
    tamanho: Array<{ key: string, label: string, value: string }>;
    tamanhoSelect: string;
    onChange: (moeda: string) => void;
}

export function PickerItem(props: PickerItemProps) {
    let moedas = props.tamanho.map((item, index) => {
        return (
            <Picker.Item key={index} label={item.label} value={item.value} />
        );
    });
    return (
        <Picker
            selectedValue={props.tamanhoSelect}
            onValueChange={(itemValue) => props.onChange(itemValue)}>
            {moedas}
        </Picker>
    );
}
