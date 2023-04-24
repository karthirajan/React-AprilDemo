package com.example.demo.todo;

import java.util.Date;
import java.util.Objects;

public class TodoResources {
	
	private int id;
	
	private String name;
	
	private String description;
	
	private Date targetDate;
	
	private boolean isCompleted;
	
	public TodoResources() {
		
	}

	public TodoResources(int id, String name, String description, Date targetDate, boolean isCompleted) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.targetDate = targetDate;
		this.isCompleted = isCompleted;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TodoResources other = (TodoResources) obj;
		return id == other.id;
	}
	
	
	
	
	
	

}
