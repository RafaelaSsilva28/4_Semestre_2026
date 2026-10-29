
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert,
    ActivityIndicator,
} from "react-native";

import { useEffect, useState } from "react";
import { postService } from "../services/postService";

export default function FromScreen({
    itemToEdit,
    onNavigateBack,
}) {
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);

    const showAlert = (message) => {
        if (Platform.OS === "web") {
            alert(message);
        } else {
            Alert.alert("Aviso", message);
        }
    };

    useEffect(() => {
        setTitle(itemToEdit?.title ?? "");
    }, [itemToEdit]);

    const handleSave = async () => {
        if (!title.trim()) {
            showAlert("Digite um título válido!");
            return;
        }

        setLoading(true);

        try {
            if (itemToEdit) {
                await postService.update(itemToEdit.id, {
                    ...itemToEdit,
                    title: title.trim(),
                    body: "Conteúdo atualizado",
                    userId: itemToEdit.userId ?? 1,
                });

                showAlert("Item atualizado com sucesso!");
            } else {
                await postService.create({
                    title: title.trim(),
                    body: "Conteúdo novo",
                    userId: 1,
                });

                showAlert("Item criado com sucesso!");
            }

            onNavigateBack();
        } catch (error) {
            showAlert(`Erro: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {itemToEdit ? "Editar Item" : "Novo Item"}
            </Text>

            <Text style={styles.label}>Título:</Text>

            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Digite o título do post..."
                editable={!loading}
                maxLength={150}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.saveButton,
                        loading && styles.disabledButton,
                    ]}
                    onPress={handleSave}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>
                            Salvar
                        </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={onNavigateBack}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f6",
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#1c1c1e",
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#3a3a3c",
        marginBottom: 6,
    },
    input: {
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#d1d1d6",
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10,
    },
    saveButton: {
        flex: 1,
        backgroundColor: "#007aff",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    disabledButton: {
        opacity: 0.7,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: "#8e8e93",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },
});
