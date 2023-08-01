package Gas;
//interface
interface BookingOperation {
    void updateDeliveryStatus(String deliveryStatus);
    void updatePaymentStatus(String paymentStatus);
}

class Person {
    private String name;
    private String address;
    private String phone;
//inheritance
    public Person(String name, String address, String phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }
    public void setName(String name) {
        this.name= name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhone(String phone) {
        this.phone = phone; 
    }
}
//inheritance
public class Consumer extends Person implements BookingOperation {
    private String consumerID;
    private String gasName;
    private String usageDetails;

    public Consumer(String consumerID, String name, String address, String phone, String gasName, String usageDetails) {
        super(name, address, phone);
        this.consumerID = consumerID;
        this.gasName = gasName;
        this.usageDetails = usageDetails;
    }

    public String getConsumerID() {
        return consumerID;
    }

    public String getGasName() {
        return gasName;
    }

    public String getUsageDetails() {
        return usageDetails;
    }
    
    public void setConsumerID(String consumerID) {
        this.consumerID = consumerID;
    }

    public void setGasName(String gasName) {
        this.gasName = gasName;
    }

    public void setUsageDetails(String usageDetails) {
        this.usageDetails = usageDetails;
    }
    @Override
    public String toString() {
        return "Consumer ID: " + consumerID +
                "\nName: " + getName() +
                "\nAddress: " + getAddress() +
                "\nPhone: " + getPhone() +
                "\nGas Name: " + gasName +
                "\nUsage Details: " + usageDetails;
    }

    @Override
    public void updateDeliveryStatus(String deliveryStatus) {
       
    }

    @Override
    public void updatePaymentStatus(String paymentStatus) {
     
    }
}