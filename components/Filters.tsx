import { categories } from '@/constants/data';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

const Filters = () => {
    const params = useLocalSearchParams<{filter?: string}>();
    const [selectedCatagory, setSelectCategory] = useState(params.filter || 'All');
    const handleCategoryPress = (category: string) => {
        if(selectedCatagory === category){
            setSelectCategory('');
            router.setParams({filter:'All'});
            return;
        }
        setSelectCategory(category);
        router.setParams({filter: category});
    }
    return (
    <ScrollView horizontal showsVerticalScrollIndicator={false} className="mt-3 mb-2">
      {categories.map((item, index) => (
        <TouchableOpacity onPress={() => handleCategoryPress(item.category)} className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${selectedCatagory === item.category ? 'bg-primary-300' : 'bg-primary-100 border border-primary-200'}`}>
            <Text className={`text-sm ${selectedCatagory === item.category ? 'text-white font-rubik-bold mt-0.5' : 'text-black-300 font-rubik'}`}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Filters