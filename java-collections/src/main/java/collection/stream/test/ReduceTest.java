package collection.stream.test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * @author rajesh
 * 
 * reduce function work on stream of object and return a single output from the stream.
 * reduce function takes either one or two parameter.In case of two param, it return value and with one param,it returns
 * Optional
 *
 */
public class ReduceTest {

	public static void main(String[] args) {
		findMaximum();
		findMinimum();
		findSum();
		
		List<Dish> dish = prapareDishList();
		
		/*dish count using map and reduce*/
		Integer count1 = dish.stream().map(d -> 1).reduce(0,(a,b) -> a+b);
		System.out.println("dish count using map and reduce : " + count1);
		
		/*dish count using count*/
		long count2 = dish.stream().count();
		System.out.println("dish count using count : " + count2);
		
		/*count veg and non-veg type dish*/
		
		
	}
	
	private static void findMaximum(){
		List<Integer> integers = Arrays.asList(8,9,0,12,80);
		Optional<Integer> max = integers.stream().reduce(Integer :: max);
		System.out.println("max value: " + max.get().intValue());
	}
	
	private static void findMinimum(){
		List<Integer> integers = Arrays.asList(8,9,0,12,80);
		Optional<Integer> min = integers.stream().reduce(Integer :: min);
		System.out.println("min value: " + min.get().intValue());
	}
	
	private static void findSum(){
		List<Integer> integers = Arrays.asList(8,9,0,12,80);
		Integer sum = integers.stream().reduce(0,(a,b) -> a+b);
		System.out.println(sum);
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

}
