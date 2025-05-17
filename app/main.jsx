import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import recipebookimg from '@/assets/images/recipe_book_img.jpg';

export default function Main() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  const generateRecipes = () => {
    if (items.length >= 2) {
      const possibleRecipes = [
        "Pasta Primavera",
        "Stir Fry Delight",
        "Quick Salad Bowl",
        "Simple Soup",
        "Easy Casserole"
      ];
      setRecipes(possibleRecipes);
    } else {
      setRecipes([]);
    }
  };

  useEffect(() => {
    generateRecipes();
  }, [items]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter items in the fridge:</Text>
      <TextInput
        style={styles.input}
        placeholder="Add an item"
        placeholderTextColor="#aaa"
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
      
      <View style={styles.itemsContainer}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
        />
      </View>

      {recipes.length > 0 && (
        <View style={styles.recipesContainer}>
          <Text style={styles.recipesTitle}>Suggested Recipes:</Text>
          <FlatList
            data={recipes}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.recipeCard}>
                <Text style={styles.recipeTitle}>{item}</Text>
              </View>
            )}
          />
        </View>
      )}
      
      <View style={styles.recipeCard}>
        <Text style={styles.recipeTitle}>Get easy to make Recipes!</Text>
        <Image source={recipebookimg} style={styles.recipeImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2C2C",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#444",
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FF6B6B",
    padding: 10,
    borderRadius: 100,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemsContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    width: 1000
  },
  itemCard: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 150,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 40,
    borderWidth: 2,
    borderColor: "#FF6B6B",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  itemText: {
    color: "white",
    fontSize: 14,
  },
  recipesContainer: {
    width: "100%",
    marginTop: 20,
  },
  recipesTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  recipeCard: {
    backgroundColor: "#FF6B6B",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  recipeTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  recipeImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});