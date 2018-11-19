-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 15, 2018 at 06:44 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `videoangular`
--

-- --------------------------------------------------------

--
-- Table structure for table `annotation_description`
--

CREATE TABLE `annotation_description` (
  `Video_Id` int(11) NOT NULL,
  `Annotation` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `annotation_description`
--

INSERT INTO `annotation_description` (`Video_Id`, `Annotation`, `Description`) VALUES
(1, 'w', 'walk'),
(1, 'r', 'run'),
(1, 's', 'sit'),
(2, 'w', 'walk'),
(3, 'r', 'run');

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `Asset` varchar(255) NOT NULL,
  `Video_Id` int(11) NOT NULL,
  `Video_Ref` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`Asset`, `Video_Id`, `Video_Ref`) VALUES
('Asset_1', 1, 'http://assets14.ign.com/videos/zencoder/2015/8/14/640/d9de372f3d373d06d4e770e73af44cb1-500000-1439510486-w.mp4'),
('Asset_1', 2, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'),
('Asset_1', 3, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `timeline`
--

CREATE TABLE `timeline` (
  `Timeline_Name` varchar(255) NOT NULL,
  `Asset` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `timeline`
--

INSERT INTO `timeline` (`Timeline_Name`, `Asset`) VALUES
('Timeline_Name_1', 'Asset_1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `Mail_Id` varchar(255) NOT NULL,
  `pwd` varchar(25) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `userName` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`FirstName`, `LastName`, `Mail_Id`, `pwd`, `id`, `userName`) VALUES
('Venkatesh', 'Nagineni', 'venky.chowdary91@gmail.com', 'ivedamar', 2, 'venky'),
('Ramakanth', 'Kowdampalli', 'rk@gmail.com', '123456', 3, 'rk');

-- --------------------------------------------------------

--
-- Table structure for table `video_annotation`
--

CREATE TABLE `video_annotation` (
  `Video_Id` int(11) DEFAULT NULL,
  `startTime` varchar(255) DEFAULT NULL,
  `endTime` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `video_annotation`
--

INSERT INTO `video_annotation` (`Video_Id`, `startTime`, `endTime`, `title`, `description`, `src`, `href`, `email`) VALUES
(1, '2.815997', '4.851465', 'Test', 'run', '', '', 'venky.chowdary91@gmail.com'),
(2, '307.090995', '310.667372', 'Test', 'walk', '', '', 'venky.chowdary91@gmail.com'),
(2, '317.241716', '320.091802', 'Test', 'walk', '', '', 'venky.chowdary91@gmail.com'),
(2, '239.252538', '241.846277', 'Test', 'walk', '', '', 'venky.chowdary91@gmail.com'),
(2, '242.787971', '244.789149', 'Test', 'walk', '', '', 'venky.chowdary91@gmail.com'),
(2, '249.474059', '250.258866', 'Test', 'walk', '', '', 'venky.chowdary91@gmail.com'),
(3, '343.920653', '344.510335', 'Test', 'run', '', '', 'venky.chowdary91@gmail.com'),
(2, '14.128284', '14.730094', 'Test', 'walk', '', '', 'venky.chowdary91@gmail.com'),
(3, '349.721952', '350.355958', 'Test', 'run', '', '', 'venky.chowdary91@gmail.com'),
(3, '352.728936', '353.036101', 'Test', 'run', '', '', 'venky.chowdary91@gmail.com'),
(1, '2130.594978', '2131.300601', 'Test', 'walk', '', '', 'venky.chowdary91@gmail.com'),
(3, '174.701935', '176.970952', 'Test', 'run', '', '', 'venky.chowdary91@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`Video_Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `Video_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
