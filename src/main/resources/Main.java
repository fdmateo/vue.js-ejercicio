
package com.zonafit.main;

import com.zonafit.entity.Usuario;
import com.zonafit.util.JpaUtil;

import jakarta.persistence.EntityManager;

public class Main {

	 public Main() {
		 EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();

	        // Crear usuario
	        Usuario usuario = new Usuario();
	        usuario.setNombre("Mateo");
	        usuario.setCorreo("mateo@example.com");

	        // Guardar en base de datos
	        em.getTransaction().begin();
	        em.persist(usuario);
	        em.getTransaction().commit();

	        System.out.println("Usuario guardado con ID: " + usuario.getId());

	        // Buscar usuario
	        Usuario encontrado = em.find(Usuario.class, usuario.getId());
	        System.out.println("Nombre encontrado: " + encontrado.getNombre());

	        em.close();
	        JpaUtil.close();
	    }
	}
}
