package use_range_to_iterate;

import java.util.*;
import java.util.stream.*;

class Sample {     
  public static void main(String[] args) {
    for(int i = 0; i < 10; i++) {
      System.out.println(i);
    }                     
    
    IntStream.range(0, 10)
             .forEach(System.out::println);
  }
}
