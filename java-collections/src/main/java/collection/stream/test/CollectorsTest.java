package collection.stream.test;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * @author rajesh
 * 
 * Collectors can be used every time you want to combine all the items in the stream into a single result.
 *
 */
public class CollectorsTest {

	public static void main(String[] args) {
		List<Dish> menu = prapareDishList();
		
		long howManyDishes = menu.stream()
				.collect(Collectors.counting());
		System.out.println("howManyDishes : " + howManyDishes);
		
		Optional<Dish> mostCalorieDish =
				menu.stream()
				.collect(Collectors.maxBy(Comparator.comparingInt(Dish::getCalory)));
		System.out.println("mostCalorieDish : " + mostCalorieDish);
		
		int totalCalories = menu.stream().collect(Collectors.summingInt(Dish::getCalory));
		System.out.println("totalCalories : " + totalCalories);
		
		double avgCalories = menu.stream().collect(Collectors.averagingInt(Dish::getCalory));
		System.out.println("avgCalories : " + avgCalories);
		
		/*This collector gathers all that information in a class called IntSummaryStatistics that provides
		convenient getter methods to access the results. there are corresponding summarizingLong and summarizingDouble 
		factory methods*/
		IntSummaryStatistics menuStatistics = menu.stream().collect(Collectors.summarizingInt(Dish::getCalory));
		
		System.out.println("menuStatistics : " + menuStatistics);
		
		//String shortMenu = menu.stream().map(Dish::getName).collect(joining());
		//String shortMenu = menu.stream().map(Dish::getName).collect(joining(", "));
		
		/*Note that joining internally makes use of a StringBuilder to append the generated strings into
		one. Also note that if the Dish class had a toString method returning the dish’s name, you’d
		obtain the same result without needing to map over the original stream with a function
		extracting the name from each dish:*/
		//String shortMenu = menu.stream().collect(Collectors.joining());
		
		//Collectors.reducing()
		/*All the collectors we’ve discussed so far are, in reality, only convenient specializations of a
		reduction process that can be defined using the reducing factory method. The
		Collectors.reducing factory method is a generalization of all of them.*/
		
		int totalCalories2 = menu.stream().collect(Collectors.reducing(0, Dish::getCalory, (i, j) -> i + j));
		System.out.println("totalCalories2 : " + totalCalories2);
		
		Optional<Dish> mostCalorieDish2 =
				menu.stream().collect(Collectors.reducing(
				(d1, d2) -> d1.getCalory() > d2.getCalory() ? d1 : d2));
		System.out.println("mostCalorieDish2 : " + mostCalorieDish2);
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
