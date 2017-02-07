package collection.stream.test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MapTest {

	public static void main(String[] args) {
		
		mapToSquare();
		
		mapToPair();
		
		mapToPairSumDivisibleBy3();
		
		mapToUniqueChars();
	}
	
	/*Given a list of numbers, how would you return a list of the square of each number? For
	  example, given [1, 2, 3, 4, 5] you should return [1, 4, 9, 16, 25].*/
	private static void mapToSquare(){
		System.out.println("mapToSquare call");
		List<Integer> source = Arrays.asList(1,2,3,4,5);
		List<Integer> squareInteger = source.stream().map(i -> i*i)
				                                     .collect(Collectors.toList());
		System.out.println(squareInteger);
		
	}
	
	/*Given two lists of numbers, how would you return all pairs of numbers? For example, given a
	  list [1, 2, 3] and a list [3, 4] you should return [(1, 3), (1, 4), (2, 3), (2, 4), (3, 3), (3, 4)]. For
	  simplicity, you can represent a pair as an array with two elements.*/
	private static void mapToPair(){
		System.out.println("mapToPair call");
		List<Integer> p1 = Arrays.asList(1,2,3);
		List<Integer> p2 = Arrays.asList(3,4);
		
		List<int[]> pairs = p1.stream().flatMap(i -> p2.stream()
				                                              .map(j -> new int[]{i,j}))
				                                              .collect(Collectors.toList());
		pairs.forEach(a -> {
			System.out.println(a[0] + "," + a[1]);
		});
		
	}
	
	/*return only pairs whose sum is divisible by 3*/
	private static void mapToPairSumDivisibleBy3(){
		System.out.println("mapToPairSumDivisibleBy3 call");
		List<Integer> p1 = Arrays.asList(1,2,3);
		List<Integer> p2 = Arrays.asList(3,4);
		
		List<int[]> pairs = p1.stream().flatMap(i -> p2.stream()
				                                               .filter(j -> (i + j) % 3 == 0)
				                                               .map(j -> new int[]{i,j}))
				                                               .collect(Collectors.toList());
		
		pairs.forEach(a -> {
			System.out.println(a[0] + "," + a[1]);
		});
				                           
	}
	
	private static void mapToUniqueChars(){
		System.out.println("mapToUniqueChars call");
		List<String> source = Arrays.asList("java" , "scala" ,"python");
		
		List<String> chars = source.stream().flatMap(s -> Arrays.stream(s.split(""))).distinct().collect(Collectors.toList());
		
		chars.forEach(System.out :: println);
	}

}
