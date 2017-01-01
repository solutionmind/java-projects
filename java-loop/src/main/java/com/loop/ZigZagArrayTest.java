package com.loop;

public class ZigZagArrayTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[] a = {1,2,3,4,5,6,7,8,9,10};
		
		for(int i = 1;i<=a.length-1;i++){
			
			int sum = 0;
			 for(int k=1;k<i;k++){
				 sum = sum + k;
			 }
			 
			 for(int j=sum;j<sum+i;j++){
				 System.out.print(a[j] + " ");
				 
			 }
			 
			 System.out.println(" ");
			
		}

	}

}
