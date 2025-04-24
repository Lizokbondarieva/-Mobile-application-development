import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch,
  ActivityIndicator
} from 'react-native';

const initialItems = [
  { id: '1', name: 'Item One', price: 10.99 },
  { id: '2', name: 'Item Two', price: 12.49 },
  { id: '3', name: 'Item Three', price: 8.75 },
  { id: '4', name: 'Item Four', price: 15.0 },
  { id: '5', name: 'Item Five', price: 9.99 },
  { id: '6', name: 'Item Six', price: 7.5 },
  { id: '7', name: 'Item Seven', price: 11.2 },
  { id: '8', name: 'Item Eight', price: 13.45 },
  { id: '9', name: 'Item Nine', price: 6.3 },
  { id: '10', name: 'Item Ten', price: 14.8 }
];

export default function ItemList() {
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  // Видалення елемента
  const handleDelete = id => setItems(prev => prev.filter(item => item.id !== id));

  // Перемикання сортування
  const toggleSort = () => setSortAsc(prev => !prev);

  // Pull-to-Refresh: скинути до початкових
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(initialItems);
      setRefreshing(false);
    }, 1500);
  };

  // Lazy Loading: підвантажити ще
  const loadMore = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      const moreItems = Array.from({ length: 5 }).map((_, idx) => {
        const newId = (items.length + idx + 1).toString();
        return {
          id: newId,
          name: `New Item ${newId}`,
          price: parseFloat((Math.random() * 20 + 1).toFixed(2))
        };
      });
      setItems(prev => [...prev, ...moreItems]);
      setLoadingMore(false);
    }, 1500);
  };

  // Фільтрація за пошуковим запитом
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // Сортування за ціною
  const sortedItems = filteredItems.sort((a, b) =>
    sortAsc ? a.price - b.price : b.price - a.price
  );

  // Рендер одного елемента
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Пошук */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name..."
        value={query}
        onChangeText={setQuery}
      />

      {/* Сортування */}
      <View style={styles.sortContainer}>
        <Text>Sort by price:</Text>
        <Switch value={sortAsc} onValueChange={toggleSort} />
        <Text>{sortAsc ? 'Asc' : 'Desc'}</Text>
      </View>

      {/* Список з Pull-to-Refresh та Lazy Loading */}
      <FlatList
        data={sortedItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loadingMore && <ActivityIndicator style={styles.loader} />
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {query && items.length ? 'No items found' : 'No items available'}
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9'
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500'
  },
  itemPrice: {
    fontSize: 14,
    color: '#555'
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#e74c3c',
    borderRadius: 4
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14
  },
  loader: {
    marginVertical: 16
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888'
  }
});