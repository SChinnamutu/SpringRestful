package com.ajse.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ajse.dao.UserDao;
import com.ajse.entities.UserEntity;

@Component
public class UserDaoImpl implements UserDao{

	@Autowired
	private SessionFactory sessionFactory;
	
	public boolean addUser(UserEntity userEntity) {		
		Session session = null;
		Transaction transaction = null;
		boolean flag = false;

		try {
			session = this.sessionFactory.openSession();
			transaction = session.beginTransaction();
			
			session.persist(userEntity);			
			transaction.commit();
			
			flag = true;
		} catch(Exception e) {
			e.printStackTrace();
			transaction.rollback();
			session.close();
		} finally {
			session.close();
		}
		
		return flag;
	}

	@SuppressWarnings("unchecked")
	public List<UserEntity> getUsers(int userId) {
		Session session = null;
		Transaction transaction = null;
		List<UserEntity> users = null;
		
		try {
			session = this.sessionFactory.openSession();
			transaction = session.beginTransaction();
			
			if(userId == 0) {
				users = (List<UserEntity>) session.createQuery("from UserEntity").list();
			} else {
				users = (List<UserEntity>) session.createQuery("from UserEntity where id = " + userId).list();
			}			
			
			transaction.commit();			
			
		} catch(Exception e) {
			e.printStackTrace();
			transaction.rollback();
			session.close();
		} finally {
			session.close();
		}
		return users;
	}

	public boolean editUser(UserEntity userEntity) {
		Session session = null;
		Transaction transaction = null;
		boolean flag = false;

		try {
			session = this.sessionFactory.openSession();
			transaction = session.beginTransaction();
			
			session.update(userEntity);		

			transaction.commit();
			
			flag = true;
		} catch(Exception e) {
			e.printStackTrace();
			transaction.rollback();
			session.close();
		} finally {
			session.close();
		}
		
		return flag;
	}
	
	public boolean deleteUser(int userId) {
		Session session = null;
		Transaction transaction = null;
		boolean flag = false;

		try {
			session = this.sessionFactory.openSession();
			transaction = session.beginTransaction();
			
			UserEntity userEntity = new UserEntity();
			userEntity.setId(userId);
			
			session.delete(userEntity);		

			transaction.commit();
			
			flag = true;
		} catch(Exception e) {
			e.printStackTrace();
			transaction.rollback();
			session.close();
		} finally {
			session.close();
		}
		
		return flag;
	}

	
	
}
