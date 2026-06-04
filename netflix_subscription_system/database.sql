
CREATE DATABASE netflix_db;

USE netflix_db;

CREATE TABLE subscriptions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    plan_name VARCHAR(100) UNIQUE,
    monthly_price DECIMAL(10,2),
    video_quality VARCHAR(50),
    screens_allowed INT,
    subscription_status VARCHAR(50)
);

INSERT INTO subscriptions
(plan_name, monthly_price, video_quality, screens_allowed, subscription_status)
VALUES
('Basic', 199, 'SD', 1, 'Active'),
('Standard', 499, 'HD', 2, 'Active'),
('Premium', 799, '4K', 4, 'Expired');
