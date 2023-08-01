package Gas;
//interface
interface BookingOperations {
    void updateDeliveryStatus(String deliveryStatus);
    void updatePaymentStatus(String paymentStatus);
}
//interface
public class Booking implements BookingOperations {
	//encapsulation
    private String consumerID;
    private int bookingID;
    private String deliveryStatus;
    private String paymentStatus;

    public Booking(String consumerID, int bookingID, String deliveryStatus, String paymentStatus) {
        this.consumerID = consumerID;
        this.bookingID = bookingID;
        this.deliveryStatus = deliveryStatus;
        this.paymentStatus = paymentStatus;
    }

    public String getConsumerID() {
        return consumerID;
    }

    public int getBookingID() {
        return bookingID;
    }

    public String getDeliveryStatus() {
        return deliveryStatus;
    }

    public void setDeliveryStatus(String deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    @Override
    public void updateDeliveryStatus(String deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    @Override
    public void updatePaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}