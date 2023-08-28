-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2023 at 07:11 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_attendance`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendancesheet`
--

CREATE TABLE `attendancesheet` (
  `email` varchar(30) NOT NULL,
  `attendance` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendancesheet`
--

INSERT INTO `attendancesheet` (`email`, `attendance`) VALUES
('', 67),
('', 100),
('', 100),
('', 100),
('', 100),
('', 100),
('aa6614@srmist.edu.in', 100),
('bb6614@srmist.edu.in', 67);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`email`, `password`) VALUES
('admin@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(100) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `branch` varchar(30) NOT NULL,
  `section` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `email`, `password`, `branch`, `section`) VALUES
(1, 'ananya', 'aa6614@srmist.edu.in', '12345', 'CSE', 'I'),
(2, 'bobby', 'bb6614@srmist.edu.in', '12345', 'EE', 'k'),
(3, 'candas', 'cc6614@srmist.edu.in', '12345', 'CSE', 'I'),
(4, 'divya', 'dd6614@srmist.edu.in', '12345', 'CSE', 'J'),
(5, 'esha', 'ee6614@srmist.edu.in', '12345', 'EE', 'I'),
(6, 'frahan', 'ff6614@srmist.edu.in', '12345', 'EC', 'K');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
