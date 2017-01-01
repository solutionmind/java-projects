package com.string.test;

public class FindAndReplaceTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String original = "vfszip:/C:/jboss-5.1/server/default/deploy/cbvm.war/WEB-INF/lib/services-client-1.0.jar/com/cox/webstrategy/services/client/MiddlewareServer.class";
		original.replaceAll("cbvm.war", "cbvm-services.war");
		
		System.out.println(original);

	}

}
