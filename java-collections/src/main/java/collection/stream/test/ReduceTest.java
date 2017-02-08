package collection.stream.test;

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
	}
	
	private static void findMaximum(){
		List<Integer> integers = Arrays.asList(8,9,0,12,80);
		Optional<Integer> max = integers.stream().reduce((a,b) -> Integer.max(a, b));
		System.out.println("max value: " + max.get().intValue());
	}
	
	private static void findMinimum(){
		List<Integer> integers = Arrays.asList(8,9,0,12,80);
		Optional<Integer> min = integers.stream().reduce((a,b) -> Integer.min(a, b));
		System.out.println("min value: " + min.get().intValue());
	}
	
	private static void findSum(){
		List<Integer> integers = Arrays.asList(8,9,0,12,80);
		Integer sum = integers.stream().reduce(0,(a,b) -> a+b);
		System.out.println(sum);
	}

}
