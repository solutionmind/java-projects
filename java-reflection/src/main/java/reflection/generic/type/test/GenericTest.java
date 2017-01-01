package reflection.generic.type.test;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

/*GenericTest class will access the generic types information of public fields.*/
public class GenericTest {

	public static void main(String[] args) throws NoSuchFieldException, SecurityException {
		
		Field field = MyClass.class.getField("stringList");

		Type genericFieldType = field.getGenericType();

		if(genericFieldType instanceof ParameterizedType){
		    ParameterizedType aType = (ParameterizedType) genericFieldType;
		    Type[] fieldArgTypes = aType.getActualTypeArguments();
		    for(Type fieldArgType : fieldArgTypes){
		        Class fieldArgClass = (Class) fieldArgType;
		        System.out.println("fieldArgClass = " + fieldArgClass);
		    }
		}

	}

}
