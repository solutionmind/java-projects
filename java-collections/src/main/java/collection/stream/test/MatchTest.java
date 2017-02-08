package collection.stream.test;

import java.util.ArrayList;
import java.util.List;

/**
 * @author rajesh
 * 
 * allMatch,anyMatch,noneMatch are terminate function(it does not return stream) and it takes predicate as arguments and 
 * return boolean.
 *
 */
public class MatchTest {

	public static void main(String[] args) {
		List<Dish> dishes = prapareDishList();
		List<Dish> nonVegDishes = prapareNonVegDishList();
		List<Dish> vegDishes = prapareVegDishList();
		
		boolean anyDishHavingCaloriLessThan1000 = dishes.stream().anyMatch(d -> d.getCalory() <1000);
		System.out.println(anyDishHavingCaloriLessThan1000);
		
		boolean anyNonVegDish = nonVegDishes.stream().anyMatch(d -> d.getType() == Dish.DISHTYPE.NONVEG);
		System.out.println(anyNonVegDish);
		
		boolean anyVegDish = vegDishes.stream().anyMatch(d -> d.getType() == Dish.DISHTYPE.VEG);
		System.out.println(anyVegDish);
	}
	
	private static List<Dish> prapareDishList(){
		List<Dish> dishes = new ArrayList<>();
		
		Dish dish1 = new Dish(Dish.DISHTYPE.VEG,100);
		Dish dish2 = new Dish(Dish.DISHTYPE.VEG,500);
		Dish dish3 = new Dish(Dish.DISHTYPE.NONVEG,800);
		Dish dish4 = new Dish(Dish.DISHTYPE.NONVEG,900);
		Dish dish5 = new Dish(Dish.DISHTYPE.VEG,900);
		Dish dish7 = new Dish(Dish.DISHTYPE.VEG,1000);
		Dish dish8 = new Dish(Dish.DISHTYPE.NONVEG,700);
		Dish dish9 = new Dish(Dish.DISHTYPE.NONVEG,1000);
		Dish dish10 = new Dish(Dish.DISHTYPE.VEG,300);
		Dish dish11 = new Dish(Dish.DISHTYPE.VEG,400);
		
		dishes.add(dish1);
		dishes.add(dish2);
		dishes.add(dish3);
		dishes.add(dish4);
		dishes.add(dish5);
		dishes.add(dish7);
		dishes.add(dish8);
		dishes.add(dish9);
		dishes.add(dish10);
		dishes.add(dish11);
		
		return dishes;
	}
	
	private static List<Dish> prapareNonVegDishList(){
		List<Dish> dishes = new ArrayList<>();
		
		Dish dish3 = new Dish(Dish.DISHTYPE.NONVEG,800);
		Dish dish4 = new Dish(Dish.DISHTYPE.NONVEG,900);
	
		Dish dish8 = new Dish(Dish.DISHTYPE.NONVEG,700);
		Dish dish9 = new Dish(Dish.DISHTYPE.NONVEG,1000);
		
		dishes.add(dish3);
		dishes.add(dish4);
		
		dishes.add(dish8);
		dishes.add(dish9);
		
		return dishes;
	}
	
	private static List<Dish> prapareVegDishList(){
		List<Dish> dishes = new ArrayList<>();
		
		Dish dish1 = new Dish(Dish.DISHTYPE.VEG,100);
		Dish dish2 = new Dish(Dish.DISHTYPE.VEG,500);
		
		Dish dish5 = new Dish(Dish.DISHTYPE.VEG,900);
		Dish dish7 = new Dish(Dish.DISHTYPE.VEG,1000);
		
		Dish dish10 = new Dish(Dish.DISHTYPE.VEG,300);
		Dish dish11 = new Dish(Dish.DISHTYPE.VEG,400);
		
		dishes.add(dish1);
		dishes.add(dish2);
		
		dishes.add(dish5);
		dishes.add(dish7);
		
		dishes.add(dish10);
		dishes.add(dish11);
		
		return dishes;
	}

}
