import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { styles } from '../styles'

// Dados de exemplo para as receitas
const recipes = [
  { id: 1, title: 'Bolo de Chocolate', ingredients: ['Chocolate', 'Farinha', 'Ovos', 'Açúcar'] },
  { id: 2, title: 'Lasanha', ingredients: ['Massa de Lasanha', 'Molho de Tomate', 'Queijo', 'Presunto'] },
  { id: 3, title: 'Salada Caesar', ingredients: ['Alface', 'Croutons', 'Queijo Parmesão', 'Molho Caesar'] },
];

// Componente para exibir uma receita individual
const RecipeItem = ({ title, ingredients }) => (
  <View style={styles.recipeItem}>
    <Text style={styles.recipeTitle}>{title}</Text>
    <Text style={styles.recipeIngredients}>{ingredients.join(', ')}</Text>
  </View>
);

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receitas</Text>
      <FlatList
        data={recipes}
        keyExtractor={recipe => recipe.id.toString()}
        renderItem={({ item }) => <RecipeItem title={item.title} ingredients={item.ingredients} />}
      />
    </View>
  );
}