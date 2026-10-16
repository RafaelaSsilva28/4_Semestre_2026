import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, } from 'react-native';

import { postService } from '../services/postService';
import { use, useEffect, useState } from 'react';

export default function FromScreen({ itemToEdit, onNavigateBack }) {
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (itemToEdit) {
            setTitle(itemToEdit.title);
        }
    }, [itemToEdit]);

    const handleSave = async () => {
        if (!title.trim()) {
            if (Platform.OS === 'web') alert('Digite um titulo valido!');
            return;
        }

        setLoading(true);
        try {
            if (itemToEdit) {
                await postService.update(itemToEdit.id, {
                    title,
                    body: 'Conteudo Atualizado',
                    userId: 1,
                });
                if (Platform.OS === 'web') alert('Item atualizado');
            } else {
                await postService.create({
                    title,
                    body: 'Conteudo novo',
                    userId: 1,
                });
                if (Platform.OS === 'web') alert('Item criado');
            }
            onNavigateBack();
        } catch (error) {
            if (Platform.OS === 'web') alert(`Erro: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {itemToEdit ? 'Editar Item' : 'Novo Item'}
            </Text>

            <Text style={styles.label}>Título:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Digite o título do post..."
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSave}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>
                        {loading ? 'Salvando...' : 'Salvar'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={onNavigateBack}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: { flex: 1, backgroundColor: '#f4f4f6', padding: 16 },
        title: { fontSize: 22, fontWeight: 'bold', color: '#1c1c1e', marginBottom: 20 },
        label: { fontSize: 14, fontWeight: '600', color: '#3a3a3c', marginBottom: 6 },
        input: {
            backgroundColor: '#fff',
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#d1d1d6',
            fontSize: 16,
            marginBottom: 20,
        },
        buttonContainer: { flexDirection: 'row', gap: 10 },
        saveButton: {
            flex: 1,
            backgroundColor: '#007aff',
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
        },
        cancelButton: {
            flex: 1,
            backgroundColor: '#8e8e93',
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
        },
        buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    });
