package com.example.demo.hello;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4300/")
public class HelloWorldController {
	
	@GetMapping(path="/hello-world")
	public String hello(){
		return "Hello World";
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorld(){
		return new HelloWorldBean("Hello World");
	}
	
	@GetMapping(path="/hello-world-bean/path/{name}")
	public HelloWorldBean helloWorld(@PathVariable String name){
		
		//throw new RuntimeException("Something Went Wrong");
		
		return new HelloWorldBean(String.format("Hi %s",name));
	}

}
