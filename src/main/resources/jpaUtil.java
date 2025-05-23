
public class jpaUtil {
	
	private static final EntityManagerFactory emf = 
	        Persistence.createEntityManagerFactory("persistenceMateo");

	    public static EntityManagerFactory getEntityManagerFactory() {
	        return emf;
	    }

	    public static void close() {
	        if (emf != null && emf.isOpen()) {
	            emf.close();
	        }

}
