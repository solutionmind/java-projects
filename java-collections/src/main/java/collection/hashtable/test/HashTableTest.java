package collection.hashtable.test;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;

public class HashTableTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Map<Person,Integer> aMap = new HashMap<Person,Integer>();
		Person p1 = new Person("1","jhon");
		Person p2 = new Person("2","jhonCarry");
		
       System.out.println(aMap.put(p1, 1));
       System.out.println(aMap.put(p2, 2));
       System.out.println(aMap.put(null, 22)); //null key are allowed in hash map, it will not throw NPE at this point
		
		Map<Person,Integer> aHashTable = new Hashtable<Person,Integer>();
		aHashTable.put(p1, 1);
		aHashTable.put(p2, 2);
		//aHashTable.put(null, 22); //null key not allowed in hash table, it will throw NPE at this point
		
		System.out.println("aMap : " + aMap);
		System.out.println("aHashTable : " + aHashTable);
		
		byte a = 4;
		byte b = 7;
		byte result = (byte)(a | b);
		System.out.println(result);
		
		StringBuilder transactionId_errorMessage = new StringBuilder();
		String transactionId = null;
		String errorMessage = null;
		transactionId_errorMessage.append("transactionId:").append(transactionId).append(",").
		append("errorMessage:").append(errorMessage);
		System.out.println(transactionId_errorMessage.toString());

	}

}
