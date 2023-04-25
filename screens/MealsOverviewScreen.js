import { Text,View,StyleSheet } from "react-native"
import { MEALS } from "../data/dummy-data"
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({route}) => {
    const catId=route.params.categoryId;

    const displayedMeals= MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem (itemData) {
        return(
            <MealItem title={itemData.item.title}/>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverviewScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})