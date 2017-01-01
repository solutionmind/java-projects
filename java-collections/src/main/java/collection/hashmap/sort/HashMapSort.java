package collection.hashmap.sort;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

public class HashMapSort{
	Map<Integer,String> mapObj;
	
	public static void main(String[] args) throws CloneNotSupportedException {
		Map<Integer,String> map = new HashMap<Integer,String>();
		map.put(21, "jhon");
		map.put(2, "rita");
		map.put(33, "sankar");
		map.put(41, "larry");
		map.put(5, "steave");
		
		System.out.println("unsorted map : " +  map);
		
	    sortByKeys(map);
		
		sortByValues(map);

	}
	
	private static void sortByKeys(Map aMap){
		Map<Integer,String> map = new TreeMap<Integer,String>(aMap);
		System.out.println("sorted map by keys : " +  map);
	}
	
	private static void sortByValues(Map aMap){
		List<Map.Entry<Integer,String>> aList = new ArrayList<Map.Entry<Integer,String>>(aMap.entrySet());
		
		Comparator comp = new Comparator<Map.Entry<Integer,String>>() {

			@Override
			public int compare(Entry<Integer, String> o1,Entry<Integer, String> o2) {
				return o1.getValue().compareTo(o2.getValue());
			}
		};
		
		Collections.sort(aList, comp);
		
		Map<Integer,String> linkedHashMap = new LinkedHashMap<Integer,String>();
		
		for(Map.Entry<Integer,String> entry : aList){
			linkedHashMap.put(entry.getKey(), entry.getValue());
		}
		
		System.out.println("sorted map by values : " +  linkedHashMap);
		
	}

}
