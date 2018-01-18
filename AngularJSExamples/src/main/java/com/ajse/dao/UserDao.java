package com.ajse.dao;

import java.util.List;

import com.ajse.entities.UserEntity;

public interface UserDao {
	public boolean addUser(UserEntity userEntity);
	public List<UserEntity> getUsers(int userId);
	public boolean editUser(UserEntity userEntity);
	public boolean deleteUser(int userId);
}