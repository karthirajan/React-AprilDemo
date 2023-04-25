package com.example.demo.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCoded {
	
	private static List<TodoResources> todoResources = new ArrayList<>();
	
	private static int counter = 0;
	
	static {
		todoResources.add(new TodoResources(++counter, "karthi", "java", new Date(), false));
		todoResources.add(new TodoResources(++counter, "sabari", "java", new Date(), false));
		todoResources.add(new TodoResources(++counter, "satyan", "java", new Date(), false));
	}
	
	public List<TodoResources> findAll(){
		return todoResources;
	}
	
	
	public TodoResources deleteTodoById(int id){
		
		TodoResources todo = findById(id);
		
		if(todo == null) {
			return null;
		}
		
		if(todoResources.remove(todo)) {
			return todo;
		}
		
		
		return null;
		
	}
	
	public TodoResources findById(int id){
		
		for (TodoResources todo : todoResources) {
			
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	
	public TodoResources save(TodoResources todo) {
		
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++counter);
			todoResources.add(todo);
			
		}else {
			deleteTodoById(todo.getId());
			todoResources.add(todo);
		}
		return todo;
	}

}
