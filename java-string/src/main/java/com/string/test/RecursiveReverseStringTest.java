package com.string.test;

public class RecursiveReverseStringTest {

	public static void main(String[] args) {
		String s = "java";
		System.out.println(reverse(s));

	}
	
	private static String reverse(String source){
		
		if(source == null || source.length() <= 1){
			return source;
		}
		return   reverse(source.substring(1)) + source.charAt(0);
		
		
	}

}
