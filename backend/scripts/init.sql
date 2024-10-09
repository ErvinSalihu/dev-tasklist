CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service VARCHAR(255),
    doctor_name VARCHAR(255),
    start_time VARCHAR(255),
    end_time VARCHAR(255),
    date DATE
);

INSERT INTO bookings (service, doctor_name, start_time, end_time, date) VALUES
    ('Service A', 'Dr. Smith', '09:00', '10:00 ', '2024-03-01'),
    ('Service B', 'Dr. Johnson', '10:30 ', '11:30 ', '2024-03-02'),
    ('Service C', 'Dr. Anderson', '13:00', '14:00 ', '2024-03-03'),
    ('Service D', 'Dr. Brown', '15:30', '16:30 ', '2024-03-04'),
    ('Service E', 'Dr. White', '17:00', '18:00 ', '2024-03-05');

SELECT * FROM bookings;
