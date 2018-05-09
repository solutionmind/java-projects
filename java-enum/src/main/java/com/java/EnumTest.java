package com.java;

import java.util.Arrays;

public class EnumTest {

	public static void main(String[] args) {
		Direction d1 = Direction.NORTH;
		Direction d2 = Direction.NORTH;
		
		if(d1 == d2){
			System.out.println("Enums are singelton");
		}
		
		AdminProvider admin1 = AdminProvider.ADMIN;
		AdminProvider admin2 = AdminProvider.ADMIN;
		
		
	
		
		if(admin1 == admin2){
			System.out.println("Admin is singelton");
			System.out.println(	admin1.values().length);
			Arrays.stream(admin1.values()).forEach(s -> System.out.println(s));
		}
		
		

	}

}
