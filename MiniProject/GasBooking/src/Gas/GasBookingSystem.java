package Gas;

import java.sql.SQLException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class GasBookingSystem {
	private static Map<String, Consumer> consumers = new HashMap<>();
    private static Map<String, Booking> bookings = new HashMap<>();
    private static int bookingIDCounter = 1;
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        try {
            DatabaseManager.connect();
            List<Consumer> existingConsumers = DatabaseManager.getAllConsumers();
            for (Consumer consumer : existingConsumers) {
                consumers.put(consumer.getConsumerID(), consumer);
            }
        } catch (SQLException e) {
            System.out.println("Failed to connect to the database.");
            e.printStackTrace();
            return;
        }

        int choice;
        do {
        	 displayMenu();
             System.out.print("Enter your choice: ");
             choice = scanner.nextInt();

             switch (choice) {
                 case 1:
                     registerNewConsumer();
                     break;
                 case 2:
                     bookRefill();
                     break;
                 case 3:
                     editConsumerDetails(); 
                     break;
                 case 4:
                     adminLogin();
                     break;
                 case 5:
                     System.out.println("Goodbye!Welcome back again...............");
                     break;
                 default:
                     System.out.println("Invalid choice. Please try again.");
             }
         } while (choice != 5);

         scanner.close();
        try {
            DatabaseManager.disconnect();
        } catch (SQLException e) {
            System.out.println("Failed to disconnect from the database.");
            e.printStackTrace();
        }
    }

    private static void displayMenu() {
        System.out.println("Welcome To Gas Booking System!!!");
        System.out.println("-----------------:)-----------------");
        System.out.println("1. New Consumer Registration");
        System.out.println("2. Book Refill");
        System.out.println("3. Edit Consumer Details");
        System.out.println("4. Admin Login");
        System.out.println("5. Exit Application");
        System.out.println("-----------------:)------------------");
    }
    private static void registerNewConsumer() {
    	 System.out.print("Enter Consumer ID: ");
         String consumerID = scanner.next();
         System.out.print("Enter Name: ");
         String name = scanner.next();
         scanner.nextLine(); 
         System.out.print("Enter Address: ");
         String address = scanner.nextLine();
         System.out.print("Enter Phone: ");
         String phone = scanner.next();
         scanner.nextLine(); 
         System.out.print("Enter Gas Name: ");
         String gasName = scanner.next();
         scanner.nextLine();
         System.out.print("Enter Usage Details: ");
         String usageDetails = scanner.nextLine();

         Consumer newConsumer = new Consumer(consumerID, name, address, phone, gasName, usageDetails);
         consumers.put(consumerID, newConsumer);

        

        try {
            DatabaseManager.insertConsumer(newConsumer);
            System.out.println("Consumer registered successfully!");
            System.out.println("Registered Consumer Details:");
            System.out.println(newConsumer);
        } catch (SQLException e) {
            System.out.println("Failed to register consumer in the database.");
            e.printStackTrace();
        }
    }

    private static void bookRefill() {
        System.out.print("Enter Consumer ID: ");
        String consumerID = scanner.next();

        if (!consumers.containsKey(consumerID)) {
            System.out.println("Consumer with ID " + consumerID + " does not exist.");
            return;
        }

        try {
            int maxBookingID = DatabaseManager.getMaxBookingID(); // Fetch the maximum booking ID from the database
            int bookingID = Math.max(maxBookingID + 1, bookingIDCounter); // Generate the new booking ID
//Object
            Booking newBooking = new Booking(consumerID, bookingID, "Pending", "Unpaid");
            bookings.put(consumerID, newBooking);
            bookingIDCounter = bookingID + 1; // Increment the bookingIDCounter

            DatabaseManager.insertBooking(newBooking);
            System.out.println("Refill booked successfully! Booking ID: " + newBooking.getBookingID());
        } catch (SQLException e) {
            System.out.println("Failed to book refill in the database.");
            e.printStackTrace();
        }
    }
   





    private static void adminLogin() {
        System.out.print("Enter Admin Username: ");
        String adminUsername = scanner.next();
        System.out.print("Enter Admin Password: ");
        String adminPassword = scanner.next();
        if (isAdminAuthenticated(adminUsername, adminPassword)) {
            adminMenu();
        } else {
            System.out.println("Invalid admin credentials. Access denied.");
        }
    }
    private static boolean isAdminAuthenticated(String username, String password) {
        
        String adminUsername = "admin";
        String adminPassword = "admin123";

        return username.equals(adminUsername) && password.equals(adminPassword);
    }
    private static void adminMenu() {
        int choice;
        do {
            displayAdminMenu();
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    viewConsumerDetails();
                    break;
                case 2:
                    updateConsumerPaymentStatus();
                    break;
                case 3:
                    updateConsumerDeliveryStatus();
                    break;
                case 4:
                    System.out.println("Goodbye Admin!!");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 4);
    }
    private static void viewConsumerDetails() {
        // Retrieve and display consumer details from the database
        List<Consumer> allConsumers = DatabaseManager.getAllConsumers();
        for (Consumer consumer : allConsumers) {
            System.out.println(consumer);
            System.out.println("------------:)----------");
        }
    }

    private static void displayAdminMenu() {
        System.out.println("Admin Menu");
        System.out.println("-----------------:)-----------------");
        System.out.println("1. View Consumer Details");
        System.out.println("2. Update Consumer Payment Status");
        System.out.println("3. Update Consumer Delivery Status");
        System.out.println("4. Logout!");
       
    }


    private static void updateDeliveryStatus() {
        // ... (unchanged)
    	 System.out.print("Enter Consumer ID: ");
         String consumerID = scanner.next();

         if (!consumers.containsKey(consumerID)) {
             System.out.println("Consumer with ID " + consumerID + " does not exist.");
             return;
         }

         System.out.print("Enter Booking ID: ");
         int bookingID = scanner.nextInt();

         Booking booking = bookings.getOrDefault(consumerID, null);
         if (booking == null || booking.getBookingID() != bookingID) {
             System.out.println("Booking with ID " + bookingID + " does not exist for the given consumer.");
             return;
         }

         System.out.print("Enter Delivery Status (Delivered/Pending): ");
         String deliveryStatus = scanner.next();

         booking.setDeliveryStatus(deliveryStatus);

        

        try {
            DatabaseManager.updateBookingDeliveryStatus(consumerID, bookingID, deliveryStatus);
            System.out.println("Delivery status updated successfully!");
        } catch (SQLException e) {
            System.out.println("Failed to update delivery status in the database.");
            e.printStackTrace();
        }
    }

    private static void updatePaymentStatus() {
    	 System.out.print("Enter Consumer ID: ");
         String consumerID = scanner.next();

         if (!consumers.containsKey(consumerID)) {
             System.out.println("Consumer with ID " + consumerID + " does not exist.");
             return;
         }

         System.out.print("Enter Booking ID: ");
         int bookingID = scanner.nextInt();

         Booking booking = bookings.getOrDefault(consumerID, null);
         if (booking == null || booking.getBookingID() != bookingID) {
             System.out.println("Booking with ID " + bookingID + " does not exist for the given consumer.");
             return;
         }

         System.out.print("Enter Payment Status (Paid/Unpaid): ");
         String paymentStatus = scanner.next();

         booking.setPaymentStatus(paymentStatus);

 

        try {
            DatabaseManager.updateBookingPaymentStatus(consumerID, bookingID, paymentStatus);
            System.out.println("Payment status updated successfully!");
        } catch (SQLException e) {
            System.out.println("Failed to update payment status in the database.");
            e.printStackTrace();
        }
    }
    private static void updateConsumerPaymentStatus() {
        System.out.print("Enter Consumer ID: ");
        String consumerID = scanner.next();

        if (!consumers.containsKey(consumerID)) {
            System.out.println("Consumer with ID " + consumerID + " does not exist.");
            return;
        }

        System.out.print("Enter Booking ID: ");
        int bookingID = scanner.nextInt();
        scanner.nextLine();

        Booking booking = bookings.getOrDefault(consumerID, null);
        if (booking == null || booking.getBookingID() != bookingID) {
            System.out.println("Booking with ID " + bookingID + " does not exist for the given consumer.");
            return;
        }

        System.out.print("Enter Payment Status (Paid/Unpaid): ");
        String paymentStatus = scanner.nextLine();

        booking.setPaymentStatus(paymentStatus);

        

        try {
            DatabaseManager.updateBookingPaymentStatus(consumerID, bookingID, paymentStatus);
            System.out.println("Payment status updated successfully!");
        } catch (SQLException e) {
            System.out.println("Failed to update payment status in the database.");
            e.printStackTrace();
        }
    }

    private static void updateConsumerDeliveryStatus() {
        System.out.print("Enter Consumer ID: ");
        String consumerID = scanner.next();

        if (!consumers.containsKey(consumerID)) {
            System.out.println("Consumer with ID " + consumerID + " does not exist.");
            return;
        }

        System.out.print("Enter Booking ID: ");
        int bookingID = scanner.nextInt();
        scanner.nextLine(); // Consume the remaining newline character

        Booking booking = bookings.getOrDefault(consumerID, null);
        if (booking == null || booking.getBookingID() != bookingID) {
            System.out.println("Booking with ID " + bookingID + " does not exist for the given consumer.");
            return;
        }

        System.out.print("Enter Delivery Status (Delivered/Pending): ");
        String deliveryStatus = scanner.nextLine();

        booking.setDeliveryStatus(deliveryStatus);

       

        try {
            DatabaseManager.updateBookingDeliveryStatus(consumerID, bookingID, deliveryStatus);
            System.out.println("Delivery status updated successfully!");
        } catch (SQLException e) {
            System.out.println("Failed to update delivery status in the database.");
            e.printStackTrace();
        }
    }
    private static void editConsumerDetails() {
        System.out.print("Enter Consumer ID: ");
        String consumerID = scanner.next();

        if (!consumers.containsKey(consumerID)) {
            System.out.println("Consumer with ID " + consumerID + " does not exist.");
            return;
        }

        System.out.println("Select the field you want to edit:");
        System.out.println("1. Name");
        System.out.println("2. Address");
        System.out.println("3. Phone");
        System.out.println("4. Gas Name");
        System.out.println("5. Usage Details");
        System.out.print("Enter your choice: ");
        int fieldChoice = scanner.nextInt();
        scanner.nextLine(); // Consume the remaining newline character

        String updatedValue;

        switch (fieldChoice) {
            case 1:
                System.out.print("Enter updated name: ");
                updatedValue = scanner.nextLine();
                consumers.get(consumerID).setName(updatedValue);
                break;
            case 2:
                System.out.print("Enter updated address: ");
                updatedValue = scanner.nextLine();
                consumers.get(consumerID).setAddress(updatedValue);
                break;
            case 3:
                System.out.print("Enter updated phone: ");
                updatedValue = scanner.nextLine();
                consumers.get(consumerID).setPhone(updatedValue);
                break;
            case 4:
                System.out.print("Enter updated gas name: ");
                updatedValue = scanner.nextLine();
                consumers.get(consumerID).setGasName(updatedValue);
                break;
            case 5:
                System.out.print("Enter updated usage details: ");
                updatedValue = scanner.nextLine();
                consumers.get(consumerID).setUsageDetails(updatedValue);
                break;
            default:
                System.out.println("Invalid choice. No fields were updated.");
                return;
        }

        try {
            // Update the consumer details in the database
            DatabaseManager.updateConsumerDetails(consumerID, consumers.get(consumerID));
            System.out.println("Consumer details updated successfully!");
        } catch (SQLException e) {
            System.out.println("Failed to update consumer details in the database.");
            e.printStackTrace();
        }
    }
}