import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  // Hàm xử lý sự kiện khi nhấn vào danh mục
  const handleCategoryPress = () => {
    // Xử lý các thao tác khi nhấn vào danh mục
    console.log('Danh mục đã được nhấn');
  };

  // Hàm xử lý sự kiện khi nhấn vào logo
  const handleLogoPress = () => {
    // Xử lý các thao tác khi nhấn vào logo
    console.log('Logo đã được nhấn');
  };

  // Hàm xử lý thay đổi văn bản tìm kiếm
  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerItem} onPress={handleCategoryPress}>
        {/* Danh mục */}
        <View>
          <Image
            source={require('../assets/category-icon.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        {/* Thanh tìm kiếm */}
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm..."
          value={searchText}
          onChangeText={handleSearchChange}
        />
        {/* Icon tìm kiếm */}
        <MaterialIcons name="search" size={24} color="black" />
      </View>
      <TouchableOpacity style={styles.headerItem} onPress={handleLogoPress}>
        {/* Logo */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e0e0e0',
    alignItems: 'flex-start', // Đưa thanh header lên trên cùng
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 80,
    height: 40,
  },
  searchContainer: {
    flex: 3, // Phần chiếm 3/5 chiều rộng header
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginRight: 10,
  },
});

export default Header;