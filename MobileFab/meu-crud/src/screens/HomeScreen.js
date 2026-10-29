
import { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Platform,
    Alert,
} from "react-native";

import { postService } from "../services/postService";

export default function HomeScreen({ onNavigateToForm }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const showAlert = (message) => {
        if (Platform.OS === "web") {
            alert(message);
        } else {
            Alert.alert("Aviso", message);
        }
    };

    const loadItems = async () => {
        setLoading(true);

        try {
            const data = await postService.getAll();
            setItems(data);
        } catch (error) {
            showAlert(`Erro: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadItems();
    }, []);

    const handleDelete = async (id) => {
        try {
            await postService.delete(id);

            setItems((prev) =>
                prev.filter((item) => item.id !== id)
            );

            showAlert("Item excluído com sucesso!");
        } catch (error) {
            showAlert(`Erro: ${error.message}`);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lista de Posts</Text>

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => onNavigateToForm(null)}
                >
                    <Text style={styles.addButtonText}>
                        + Novo Post
                    </Text>
                </TouchableOpacity>
            </View>

            {loading ? (
                <View style={styles.center}>
                    <ActivityIndicator
                        size="large"
                        color="#007aff"
                    />
                    <Text style={styles.loadingText}>
                        Carregando posts...
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={items}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={styles.listContainer}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>
                            Nenhum post encontrado.
                        </Text>
                    }
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <Text style={styles.cardTitle}>
                                    {item.title}
                                </Text>
                            </View>

                            <View style={styles.actions}>
                                <TouchableOpacity
                                    style={styles.editButton}
                                    onPress={() =>
                                        onNavigateToForm(item)
                                    }
                                >
                                    <Text style={styles.buttonText}>
                                        Editar
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.deleteButton}
                                    onPress={() =>
                                        handleDelete(item.id)
                                    }
                                >
                                    <Text style={styles.buttonText}>
                                        Excluir
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f6",
        padding: 16,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 10,
        color: "#666",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        gap: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#1c1c1e",
        flexShrink: 1,
    },
    addButton: {
        backgroundColor: "#34c759",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    addButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    listContainer: {
        paddingBottom: 20,
        flexGrow: 1,
    },
    emptyText: {
        textAlign: "center",
        marginTop: 30,
        color: "#777",
    },
    card: {
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#e5e5ea",
    },
    cardContent: {
        flex: 1,
        marginRight: 8,
    },
    cardTitle: {
        fontSize: 15,
        color: "#1c1c1e",
    },
    actions: {
        flexDirection: "row",
        gap: 6,
    },
    editButton: {
        backgroundColor: "#ff9500",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    deleteButton: {
        backgroundColor: "#ff3b30",
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
});
