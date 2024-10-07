-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 24, 2024 at 04:09 PM
-- Server version: 10.11.8-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u704867921_fasttrack`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_airport`
--

CREATE TABLE `tb_airport` (
  `port_id` int(11) NOT NULL,
  `airport_name` varchar(500) DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_airport`
--

INSERT INTO `tb_airport` (`port_id`, `airport_name`, `code`) VALUES
(1, 'Agartala(IXA)', 'IXA'),
(2, 'Agatti(AGX)', 'AGX'),
(3, 'Agra(AGR)', 'AGR'),
(4, 'Ahmedabad(AMD)', 'AMD'),
(5, 'Aizawl(AJL)', 'AJL'),
(6, 'Amritsar(ATQ)', 'ATQ'),
(7, 'Aurangabad(IXU)', 'IXU'),
(8, 'Ayodhya(AYJ)', 'AYJ'),
(9, 'Bagdogra(IXB)', 'IXB'),
(10, 'Bareilly(BEK)', 'BEK'),
(11, 'Belagavi(IXG)', 'IXG'),
(12, 'Bengaluru(BLR)', 'BLR'),
(13, 'Bhopal(BHO)', 'BHO'),
(14, 'Bhubaneswar(BBI)', 'BBI'),
(15, 'Chandigarh(IXC)', 'IXC'),
(16, 'Chennai(MAA)', 'MAA'),
(17, 'Coimbatore(CJB)', 'CJB'),
(18, 'Darbhanga(DBR)', 'DBR'),
(19, 'Dehradun(DED)', 'DED'),
(20, 'Delhi(DEL)', 'DEL'),
(21, 'Deoghar(DGH)', 'DGH'),
(22, 'Dharamshala(DHM)', 'DHM'),
(23, 'Dibrugarh(DIB)', 'DIB'),
(24, 'Dimapur(DMU)', 'DMU'),
(25, 'Diu(DIU)', 'DIU'),
(26, 'Durgapur(RDP)', 'RDP'),
(27, 'Gaya(GAY)', 'GAY'),
(28, 'Goa(GOI)', 'GOI'),
(29, 'Gondia(GDB)', 'GDB'),
(30, 'Gorakhpur(GOP)', 'GOP'),
(31, 'Guwahati(GAU)', 'GAU'),
(32, 'Gwalior(GWL)', 'GWL'),
(33, 'Hirasar(HSR)', 'HSR'),
(34, 'Hubli(HBX)', 'HBX'),
(35, 'Hyderabad(HYD)', 'HYD'),
(36, 'Imphal(IMF)', 'IMF'),
(37, 'Indore(IDR)', 'IDR'),
(38, 'Itanagar(HGI)', 'HGI'),
(39, 'Jabalpur(JLR)', 'JLR'),
(40, 'Jagdalpur(JGB)', 'JGB'),
(41, 'Jaipur(JAI)', 'JAI'),
(42, 'Jaisalmer(JSA)', 'JSA'),
(43, 'Jammu(IXJ)', 'IXJ'),
(44, 'Jharsuguda(JRG)', 'JRG'),
(45, 'Jodhpur(JDH)', 'JDH'),
(46, 'Jorhat(JRH)', 'JRH'),
(47, 'Kadapa(CDP)', 'CDP'),
(48, 'Kannur(CNN)', 'CNN'),
(49, 'Kanpur(KNU)', 'KNU'),
(50, 'Khajuraho(HJR)', 'HJR'),
(51, 'Kochi(COK)', 'COK'),
(52, 'Kolhapur(KLH)', 'KLH'),
(53, 'Kolkata(CCU)', 'CCU'),
(54, 'Kozhikode(CCJ)', 'CCJ'),
(55, 'Kurnool(KJB)', 'KJB'),
(56, 'Leh(IXL)', 'IXL'),
(57, 'Lucknow(LKO)', 'LKO'),
(58, 'Madurai(IXM)', 'IXM'),
(59, 'Mangaluru(IXE)', 'IXE'),
(60, 'Mumbai(BOM)', 'BOM'),
(61, 'Mysuru(MYQ)', 'MYQ'),
(62, 'Nagpur(NAG)', 'NAG'),
(63, 'Nashik(ISK)', 'ISK'),
(64, 'North Goa(GOX)', 'GOX'),
(65, 'Pantnagar(PGH)', 'PGH'),
(66, 'Patna(PAT)', 'PAT'),
(67, 'Port Blair(IXZ)', 'IXZ'),
(68, 'Prayagraj(IXD)', 'IXD'),
(69, 'Pune(PNQ)', 'PNQ'),
(70, 'Raipur(RPR)', 'RPR'),
(71, 'Rajahmundry(RJA)', 'RJA'),
(72, 'Rajkot(RAJ)', 'RAJ'),
(73, 'Ranchi(IXR)', 'IXR'),
(74, 'Salem(SXV)', 'SXV'),
(75, 'Shillong(SHL)', 'SHL'),
(76, 'Shirdi(SAG)', 'SAG'),
(77, 'Shivamogga(RQY)', 'RQY'),
(78, 'Silchar(IXS)', 'IXS'),
(79, 'Srinagar(SXR)', 'SXR'),
(80, 'Surat(STV)', 'STV'),
(81, 'Thiruvananthapuram(TRV)', 'TRV'),
(82, 'Tiruchirappalli(TRZ)', 'TRZ'),
(83, 'Tirupati(TIR)', 'TIR'),
(84, 'Tuticorin(TCR)', 'TCR'),
(85, 'Udaipur(UDR)', 'UDR'),
(86, 'Vadodara(BDQ)', 'BDQ'),
(87, 'Varanasi(VNS)', 'VNS'),
(88, 'Vijayawada(VGA)', 'VGA'),
(89, 'Visakhapatnam(VTZ)', 'VTZ');

-- --------------------------------------------------------

--
-- Table structure for table `tb_airport_to`
--

CREATE TABLE `tb_airport_to` (
  `toport_id` int(11) NOT NULL,
  `airport_name` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_airport_to`
--

INSERT INTO `tb_airport_to` (`toport_id`, `airport_name`) VALUES
(1, 'Agartala(IXA)'),
(2, 'Agatti(AGX)'),
(3, 'Agra(AGR)'),
(4, 'Ahmedabad(AMD)'),
(5, 'Aizawl(AJL)'),
(6, 'Amritsar(ATQ)'),
(7, 'Aurangabad(IXU)'),
(8, 'Ayodhya(AYJ)'),
(9, 'Bagdogra(IXB)'),
(10, 'Bareilly(BEK)'),
(11, 'Belagavi(IXG)'),
(12, 'Bengaluru(BLR)'),
(13, 'Bhopal(BHO)'),
(14, 'Bhubaneswar(BBI)'),
(15, 'Chandigarh(IXC)'),
(16, 'Chennai(MAA)'),
(17, 'Coimbatore(CJB)'),
(18, 'Darbhanga(DBR)'),
(19, 'Dehradun(DED)'),
(20, 'Delhi(DEL)'),
(21, 'Deoghar(DGH)'),
(22, 'Dharamshala(DHM)'),
(23, 'Dibrugarh(DIB)'),
(24, 'Dimapur(DMU)'),
(25, 'Diu(DIU)'),
(26, 'Durgapur(RDP)'),
(27, 'Gaya(GAY)'),
(28, 'Goa(GOI)'),
(29, 'Gondia(GDB)'),
(30, 'Gorakhpur(GOP)'),
(31, 'Guwahati(GAU)'),
(32, 'Gwalior(GWL)'),
(33, 'Hirasar(HSR)'),
(34, 'Hubli(HBX)'),
(35, 'Hyderabad(HYD)'),
(36, 'Imphal(IMF)'),
(37, 'Indore(IDR)'),
(38, 'Itanagar(HGI)'),
(39, 'Jabalpur(JLR)'),
(40, 'Jagdalpur(JGB)'),
(41, 'Jaipur(JAI)'),
(42, 'Jaisalmer(JSA)'),
(43, 'Jammu(IXJ)'),
(44, 'Jharsuguda(JRG)'),
(45, 'Jodhpur(JDH)'),
(46, 'Jorhat(JRH)'),
(47, 'Kadapa(CDP)'),
(48, 'Kannur(CNN)'),
(49, 'Kanpur(KNU)'),
(50, 'Khajuraho(HJR)'),
(51, 'Kochi(COK)'),
(52, 'Kolhapur(KLH)'),
(53, 'Kolkata(CCU)'),
(54, 'Kozhikode(CCJ)'),
(55, 'Kurnool(KJB)'),
(56, 'Leh(IXL)'),
(57, 'Lucknow(LKO)'),
(58, 'Madurai(IXM)'),
(59, 'Mangaluru(IXE)'),
(60, 'Mumbai(BOM)'),
(61, 'Mysuru(MYQ)'),
(62, 'Nagpur(NAG)'),
(63, 'Nashik(ISK)'),
(64, 'North Goa(GOX)'),
(65, 'Pantnagar(PGH)'),
(66, 'Patna(PAT)'),
(67, 'Port Blair(IXZ)'),
(68, 'Prayagraj(IXD)'),
(69, 'Pune(PNQ)'),
(70, 'Raipur(RPR)'),
(71, 'Rajahmundry(RJA)'),
(72, 'Rajkot(RAJ)'),
(73, 'Ranchi(IXR)'),
(74, 'Salem(SXV)'),
(75, 'Shillong(SHL)'),
(76, 'Shirdi(SAG)'),
(77, 'Shivamogga(RQY)'),
(78, 'Silchar(IXS)'),
(79, 'Srinagar(SXR)'),
(80, 'Surat(STV)'),
(81, 'Thiruvananthapuram(TRV)'),
(82, 'Tiruchirappalli(TRZ)'),
(83, 'Tirupati(TIR)'),
(84, 'Tuticorin(TCR)'),
(85, 'Udaipur(UDR)'),
(86, 'Vadodara(BDQ)'),
(87, 'Varanasi(VNS)'),
(88, 'Vijayawada(VGA)'),
(89, 'Visakhapatnam(VTZ)');

-- --------------------------------------------------------

--
-- Table structure for table `tb_brand`
--

CREATE TABLE `tb_brand` (
  `brand_id` int(100) NOT NULL,
  `brand_name` varchar(100) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_brand`
--

INSERT INTO `tb_brand` (`brand_id`, `brand_name`, `date`, `status`) VALUES
(3, 'TATA', '19/09/2024', 'active'),
(4, 'mahindra', '19/09/2024', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `tb_city`
--

CREATE TABLE `tb_city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(500) DEFAULT NULL,
  `district` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_city`
--

INSERT INTO `tb_city` (`city_id`, `city_name`, `district`) VALUES
(1, 'Balipatapur', 19),
(2, 'Balugaon', 19),
(3, 'Banapur', 19),
(4, 'Bhakarsahi', 19),
(5, 'Bhapur', 19),
(6, 'Bhubaneswar', 19),
(7, 'Dungamal', 19),
(8, 'Jatani', 19),
(9, 'Kaipadar', 19),
(10, 'Khordha', 19),
(11, 'Majhihara', 19),
(12, 'Pratapsasan', 19),
(13, 'Tangi', 19);

-- --------------------------------------------------------

--
-- Table structure for table `tb_country`
--

CREATE TABLE `tb_country` (
  `country_id` int(11) NOT NULL,
  `country` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_country`
--

INSERT INTO `tb_country` (`country_id`, `country`) VALUES
(1, 'India');

-- --------------------------------------------------------

--
-- Table structure for table `tb_district`
--

CREATE TABLE `tb_district` (
  `dist_id` int(11) NOT NULL,
  `dist_name` varchar(500) NOT NULL,
  `state_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_district`
--

INSERT INTO `tb_district` (`dist_id`, `dist_name`, `state_id`) VALUES
(1, 'Angul', 19),
(2, 'Balangir', 19),
(3, 'Balasore', 19),
(4, 'Bargarh', 19),
(5, 'Bhadrak', 19),
(6, 'Boudh', 19),
(7, 'Cuttack', 19),
(8, 'Debagarh', 19),
(9, 'Dhenkanal', 19),
(10, 'Gajapati', 19),
(11, 'Ganjam', 19),
(12, 'Jagatsinghapur', 19),
(13, 'Jajpur', 19),
(14, 'Jharsuguda', 19),
(15, 'Kalahandi', 19),
(16, 'Kandhamal', 19),
(17, 'Kendrapara', 19),
(18, 'Kendujhar', 19),
(19, 'Khordha', 19),
(20, 'Koraput', 19),
(21, 'Malkangiri', 19),
(22, 'Mayurbhanj', 19),
(23, 'Nabarangpur', 19),
(24, 'Nayagarh', 19),
(25, 'Nuapada', 19),
(26, 'Puri', 19),
(27, 'Rayagada', 19),
(28, 'Sambalpur', 19),
(29, 'Subarnapur', 19),
(30, 'Sundargarh', 19);

-- --------------------------------------------------------

--
-- Table structure for table `tb_hotelbooking`
--

CREATE TABLE `tb_hotelbooking` (
  `hbooking_id` int(11) NOT NULL,
  `hotel_name` varchar(500) NOT NULL,
  `hotel_address` varchar(500) NOT NULL,
  `guest_name` varchar(100) NOT NULL,
  `email` varchar(500) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `gtotal` int(11) NOT NULL,
  `receiptno` varchar(500) NOT NULL,
  `date` varchar(200) NOT NULL,
  `razorpay_id` text NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_hotelbooking`
--

INSERT INTO `tb_hotelbooking` (`hbooking_id`, `hotel_name`, `hotel_address`, `guest_name`, `email`, `phone`, `address`, `gtotal`, `receiptno`, `date`, `razorpay_id`, `status`) VALUES
(1, 'Novotel Mumbai Juhu Beach', 'Juhu Beach, Maharastra', 'S', 'susantam320@gmail.com', '9438803152', 'bbsr', 44159, 'x6hj', '2024-09-19', 'pay_Oz3PhlhlfuJeqa', 'success'),
(2, 'Novotel Mumbai Juhu Beach', 'Juhu Beach, Maharastra', 'S', 'susantam320@gmail.com', '9438803152', 'bbsr', 44159, 'GAHDlcn4', '2024-09-19', 'pay_Oz4ja1UMqQtXmr', 'success'),
(3, 'YMCA International House', '18 YMCA Road Mumbai Central', 'S', 'susantam320@gmail.com', '9438803152', 'bbsr', 10680, 'I9c3Fm6g', '2024-09-19', 'pay_Oz4ooKVH8SbfhT', 'success');

-- --------------------------------------------------------

--
-- Table structure for table `tb_login`
--

CREATE TABLE `tb_login` (
  `id` int(100) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_login`
--

INSERT INTO `tb_login` (`id`, `username`, `password`, `status`) VALUES
(1, 'admin', '1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_model`
--

CREATE TABLE `tb_model` (
  `model_id` int(100) NOT NULL,
  `brand_id` varchar(100) DEFAULT NULL,
  `model_name` varchar(100) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_model`
--

INSERT INTO `tb_model` (`model_id`, `brand_id`, `model_name`, `date`, `status`) VALUES
(1, '3', 'punch', '19/09/2024', 'active'),
(3, '4', 'Thar', '19/09/2024', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `tb_state`
--

CREATE TABLE `tb_state` (
  `stateid` int(11) NOT NULL,
  `state` varchar(500) NOT NULL,
  `countryid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_state`
--

INSERT INTO `tb_state` (`stateid`, `state`, `countryid`) VALUES
(1, 'Andhra Pradesh', 1),
(2, 'Arunachal Pradesh', 1),
(3, 'Assam', 1),
(4, 'Bihar', 1),
(5, 'Chhattisgarh', 1),
(6, 'Goa', 1),
(7, 'Gujarat', 1),
(8, 'Haryana', 1),
(9, 'Himachal Pradesh', 1),
(10, 'Jharkhand', 1),
(11, 'Karnataka', 1),
(12, 'Kerala', 1),
(13, 'Madhya Pradesh', 1),
(14, 'Maharashtra', 1),
(15, 'Manipur', 1),
(16, 'Meghalaya', 1),
(17, 'Mizoram', 1),
(18, 'Nagaland', 1),
(19, 'Odisha', 1),
(20, 'Punjab', 1),
(21, 'Rajasthan', 1),
(22, 'Sikkim', 1),
(23, 'Tamil Nadu', 1),
(24, 'Telangana', 1),
(25, 'Tripura', 1),
(26, 'Uttar Pradesh', 1),
(27, 'Uttarakhand', 1),
(28, 'West Bengal', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tb_users`
--

CREATE TABLE `tb_users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `c_password` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_variant`
--

CREATE TABLE `tb_variant` (
  `variant_id` int(100) NOT NULL,
  `variant_name` varchar(100) DEFAULT NULL,
  `percent` varchar(100) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_variant`
--

INSERT INTO `tb_variant` (`variant_id`, `variant_name`, `percent`, `date`, `status`) VALUES
(1, 'as', '3', '19/09/2024', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `tb_vehicle`
--

CREATE TABLE `tb_vehicle` (
  `vehicle_id` int(100) NOT NULL,
  `title` text DEFAULT NULL,
  `brand_id` varchar(100) DEFAULT NULL,
  `model_id` varchar(100) DEFAULT NULL,
  `facilities` text DEFAULT NULL,
  `localtrips1` varchar(100) DEFAULT NULL,
  `cost1` varchar(100) DEFAULT NULL,
  `localtrips2` varchar(100) DEFAULT NULL,
  `cost2` varchar(100) DEFAULT NULL,
  `localtrips3` varchar(100) DEFAULT NULL,
  `cost3` varchar(100) DEFAULT NULL,
  `localtrips4` varchar(100) DEFAULT NULL,
  `cost4` varchar(100) DEFAULT NULL,
  `outstation` varchar(100) DEFAULT NULL,
  `outstation_cost` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `date` varchar(100) NOT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_vehiclephoto`
--

CREATE TABLE `tb_vehiclephoto` (
  `photo_id` int(100) NOT NULL,
  `brand_id` varchar(100) DEFAULT NULL,
  `model_id` varchar(100) DEFAULT NULL,
  `car_photo` text DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_vehiclephoto`
--

INSERT INTO `tb_vehiclephoto` (`photo_id`, `brand_id`, `model_id`, `car_photo`, `date`, `status`) VALUES
(6, '4', 'thar', '202409190120Chat_Page_look.png', '2024-09-19', 'active'),
(7, '4', 'thar', '202409190120Chat_Page_look.png', '2024-09-19', 'active'),
(8, '3', 'nano', '202409190127Chat_Page_look.png', '2024-09-19', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_airport`
--
ALTER TABLE `tb_airport`
  ADD PRIMARY KEY (`port_id`);

--
-- Indexes for table `tb_airport_to`
--
ALTER TABLE `tb_airport_to`
  ADD PRIMARY KEY (`toport_id`);

--
-- Indexes for table `tb_brand`
--
ALTER TABLE `tb_brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `tb_city`
--
ALTER TABLE `tb_city`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `tb_country`
--
ALTER TABLE `tb_country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `tb_district`
--
ALTER TABLE `tb_district`
  ADD PRIMARY KEY (`dist_id`);

--
-- Indexes for table `tb_hotelbooking`
--
ALTER TABLE `tb_hotelbooking`
  ADD PRIMARY KEY (`hbooking_id`);

--
-- Indexes for table `tb_login`
--
ALTER TABLE `tb_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_model`
--
ALTER TABLE `tb_model`
  ADD PRIMARY KEY (`model_id`);

--
-- Indexes for table `tb_state`
--
ALTER TABLE `tb_state`
  ADD PRIMARY KEY (`stateid`);

--
-- Indexes for table `tb_users`
--
ALTER TABLE `tb_users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tb_variant`
--
ALTER TABLE `tb_variant`
  ADD PRIMARY KEY (`variant_id`);

--
-- Indexes for table `tb_vehicle`
--
ALTER TABLE `tb_vehicle`
  ADD PRIMARY KEY (`vehicle_id`);

--
-- Indexes for table `tb_vehiclephoto`
--
ALTER TABLE `tb_vehiclephoto`
  ADD PRIMARY KEY (`photo_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_airport`
--
ALTER TABLE `tb_airport`
  MODIFY `port_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `tb_airport_to`
--
ALTER TABLE `tb_airport_to`
  MODIFY `toport_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `tb_brand`
--
ALTER TABLE `tb_brand`
  MODIFY `brand_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tb_city`
--
ALTER TABLE `tb_city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tb_country`
--
ALTER TABLE `tb_country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_district`
--
ALTER TABLE `tb_district`
  MODIFY `dist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tb_hotelbooking`
--
ALTER TABLE `tb_hotelbooking`
  MODIFY `hbooking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_login`
--
ALTER TABLE `tb_login`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_model`
--
ALTER TABLE `tb_model`
  MODIFY `model_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_state`
--
ALTER TABLE `tb_state`
  MODIFY `stateid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tb_users`
--
ALTER TABLE `tb_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_variant`
--
ALTER TABLE `tb_variant`
  MODIFY `variant_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_vehicle`
--
ALTER TABLE `tb_vehicle`
  MODIFY `vehicle_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_vehiclephoto`
--
ALTER TABLE `tb_vehiclephoto`
  MODIFY `photo_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
