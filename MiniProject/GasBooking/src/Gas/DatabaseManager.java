package Gas;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DatabaseManager {
    private static final String DATABASE_URL = "jdbc:mysql://127.0.0.1:3306/gasbookingsystem";
    private static final String DATABASE_USERNAME = "root";
    private static final String DATABASE_PASSWORD = "Archana2003#";
    private static Connection connection;

    public static void connect() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("MySQL JDBC driver not found.");
            e.printStackTrace();
            return;
        }

        connection = DriverManager.getConnection(DATABASE_URL, DATABASE_USERNAME, DATABASE_PASSWORD);
        createTablesIfNotExist();
    }
    public static void disconnect() throws SQLException {
        if (connection != null) {
            connection.close();
        }
    }

    private static void createTablesIfNotExist() throws SQLException {
        String createConsumersTableQuery = "CREATE TABLE IF NOT EXISTS consumers (" +
                "consumer_id INTEGER PRIMARY KEY," +
                "name TEXT," +
                "address TEXT," +
                "phone TEXT," +
                "gas_name TEXT," +
                "usage_details TEXT" +
                ");";

        String createBookingsTableQuery = "CREATE TABLE IF NOT EXISTS bookings (" +
        		"booking_id INTEGER AUTO_INCREMENT PRIMARY KEY," +
                "consumer_id INTEGER," +
                "delivery_status TEXT," +
                "payment_status TEXT," +
                "PRIMARY KEY (booking_id)," +
                "FOREIGN KEY (consumer_id) REFERENCES consumers(consumer_id)" +
                ");";

        connection.createStatement().execute(createConsumersTableQuery);
        connection.createStatement().execute(createBookingsTableQuery);
    }

    public static void insertConsumer(Consumer consumer) throws SQLException {
        String insertQuery = "INSERT INTO consumers (consumer_id, name, address, phone, gas_name, usage_details) " +
                "VALUES (?, ?, ?, ?, ?, ?);";
        PreparedStatement statement = connection.prepareStatement(insertQuery);
        statement.setString(1, consumer.getConsumerID());
        statement.setString(2, consumer.getName());
        statement.setString(3, consumer.getAddress());
        statement.setString(4, consumer.getPhone());
        statement.setString(5, consumer.getGasName());
        statement.setString(6, consumer.getUsageDetails());
        statement.executeUpdate();
    }

    public static void insertBooking(Booking booking) throws SQLException {
        String insertQuery = "INSERT INTO bookings (consumer_id, booking_id, delivery_status, payment_status) " +
                "VALUES (?, ?, ?, ?);";
        PreparedStatement statement = connection.prepareStatement(insertQuery);
        statement.setString(1, booking.getConsumerID());
        statement.setInt(2, booking.getBookingID());
        statement.setString(3, booking.getDeliveryStatus());
        statement.setString(4, booking.getPaymentStatus());
        statement.executeUpdate();
    }

    public static List<Consumer> getAllConsumers() {
        List<Consumer> consumers = new ArrayList<>();
        String selectQuery = "SELECT * FROM consumers;";
        try (ResultSet resultSet = connection.createStatement().executeQuery(selectQuery)) {
            while (resultSet.next()) {
                String consumerID = resultSet.getString("consumer_id");
                String name = resultSet.getString("name");
                String address = resultSet.getString("address");
                String phone = resultSet.getString("phone");
                String gasName = resultSet.getString("gas_name");
                String usageDetails = resultSet.getString("usage_details");
                consumers.add(new Consumer(consumerID, name, address, phone, gasName, usageDetails));
            }
        } catch (SQLException e) {
            System.out.println("Failed to fetch consumers from the database.");
            e.printStackTrace();
        }

        return consumers;
    }

    public static Booking getBooking(String consumerID, int bookingID) throws SQLException {
        String selectQuery = "SELECT * FROM bookings WHERE consumer_id = ? AND booking_id = ?;";
        PreparedStatement statement = connection.prepareStatement(selectQuery);
        statement.setString(1, consumerID);
        statement.setInt(2, bookingID);
        ResultSet resultSet = statement.executeQuery();

        if (resultSet.next()) {
            String deliveryStatus = resultSet.getString("delivery_status");
            String paymentStatus = resultSet.getString("payment_status");
            return new Booking(consumerID, bookingID, deliveryStatus, paymentStatus);
        }

        return null;
    }

    public static void updateBookingDeliveryStatus(String consumerID, int bookingID, String deliveryStatus) throws SQLException {
        String updateQuery = "UPDATE bookings SET delivery_status = ? WHERE consumer_id = ? AND booking_id = ?;";
        PreparedStatement statement = connection.prepareStatement(updateQuery);
        statement.setString(1, deliveryStatus);
        statement.setString(2, consumerID);
        statement.setInt(3, bookingID);
        statement.executeUpdate();
    }

    public static void updateBookingPaymentStatus(String consumerID, int bookingID, String paymentStatus) throws SQLException {
        String updateQuery = "UPDATE bookings SET payment_status = ? WHERE consumer_id = ? AND booking_id = ?;";
        PreparedStatement statement = connection.prepareStatement(updateQuery);
        statement.setString(1, paymentStatus);
        statement.setString(2, consumerID);
        statement.setInt(3, bookingID);
        statement.executeUpdate();
    }
    public static int getMaxBookingID() throws SQLException {
        String selectQuery = "SELECT MAX(booking_id) FROM bookings;";
        try (ResultSet resultSet = connection.createStatement().executeQuery(selectQuery)) {
            if (resultSet.next()) {
                return resultSet.getInt(1);
            }
        } catch (SQLException e) {
            System.out.println("Failed to fetch the maximum booking ID from the database.");
            e.printStackTrace();
        }
        return 0; // Return 0 if there's an error or no booking ID is found in the database.
    }
    public static void updateConsumerDetails(String consumerID, Consumer updatedConsumer) throws SQLException {
        String updateQuery = "UPDATE consumers SET name = ?, address = ?, phone = ?, gas_name = ?, usage_details = ? WHERE consumer_id = ?;";
        PreparedStatement statement = connection.prepareStatement(updateQuery);
        statement.setString(1, updatedConsumer.getName());
        statement.setString(2, updatedConsumer.getAddress());
        statement.setString(3, updatedConsumer.getPhone());
        statement.setString(4, updatedConsumer.getGasName());
        statement.setString(5, updatedConsumer.getUsageDetails());
        statement.setString(6, consumerID);
        statement.executeUpdate();
    }
    
}