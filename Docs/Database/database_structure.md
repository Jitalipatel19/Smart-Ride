# SmartRide – Database Design (Day 2)

## Database Name
SmartRide

## Collections

### users
- name
- email
- phone
- role (user/admin)
- createdAt

### drivers
- name
- phone
- licenseNumber
- vehicleId
- status

### vehicles
- vehicleNumber
- type
- capacity
- driverId

### routes
- startLocation
- endLocation
- pickupTime
- dropTime
- driverId

### subscriptions
- userId
- planType
- startDate
- endDate
- status

### payments
- userId
- subscriptionId
- amount
- paymentMode
- paymentStatus

### notifications
- userId
- message
- isRead
