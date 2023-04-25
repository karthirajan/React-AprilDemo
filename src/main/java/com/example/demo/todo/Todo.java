package com.example.demo.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4300/")
public class Todo {
	
	@Autowired
	private TodoHardCoded tc;
	
	@GetMapping(path="/users/{username}/userList")
	public List<TodoResources> getAllTodo(@PathVariable String username){
		
		return tc.findAll();
		
	}
	
	@GetMapping(path="/users/{username}/userList/{id}")
	public TodoResources findTodoById(@PathVariable String username, @PathVariable int id){
		
		return tc.findById(id);
		
	}
	
	@DeleteMapping(path="/users/{username}/userList/{id}")
    public ResponseEntity<Void> deleteTodoById(@PathVariable String username, @PathVariable int id){
		
		TodoResources todo = tc.deleteTodoById(id);
		if(todo !=null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
		
	}
	
	@PutMapping(path="/users/{username}/userList/{id}")
    public ResponseEntity<TodoResources> updateTodoById(@PathVariable String username, @PathVariable int id,@RequestBody TodoResources todo){
		
		TodoResources updatedTodo = tc.save(todo);
		return new ResponseEntity<TodoResources>(updatedTodo,HttpStatus.OK);
		
	}
	
	@PostMapping(path="/users/{username}/userList")
    public ResponseEntity<Void> addTodoById(@PathVariable String username,@RequestBody TodoResources todo){
		
		TodoResources createdTodo = tc.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}

}
