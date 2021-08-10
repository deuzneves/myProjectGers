-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10-Ago-2021 às 20:33
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gers_garage`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `service` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `time` varchar(45) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `booking`
--

INSERT INTO `booking` (`id`, `service`, `date`, `time`, `comment`, `user_id`) VALUES
(1, 'Annual Service', '2021-08-11T23:00:00.000Z', '11:00am', 'Car is making weird noise', 9),
(8, 'Repair / Fault', '2021-08-11T23:00:00.000Z', '15:00pm', 'I need to change the oil', 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(45) NOT NULL DEFAULT 'costumer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(1, 'tas@gmail.com', '$2b$10$sMmycIWpCKrT7XrgqY4RQeHzr/h709gz1hZF9I', 'costumer'),
(2, 'qwe', '$2b$10$YGIsvw0xqiSI4DqTRu2tDOM0b51/Xz38zFFJiI', 'costumer'),
(3, 'qwe@gmail.com', '$2b$10$ZfQ6zTSUQITwr7bHjnIUXe43kMFI67sGk07wN7', 'costumer'),
(4, 'a@gmail.com', '$2b$10$nLTulcQifgshAglMm6hIbeo/ZSU5GSk1A7Lb70vbuucRFkf56vOFW', 'costumer'),
(5, 'deuzito@gmail.com', '12345678', 'staff'),
(6, 'deuz@gmail.com', '$2b$10$Hoj0wEgu.TcPmFAIBSIth.l4OdSv6ptQJx2a/0u6usVPAEV9MpZMe', 'staff');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_details`
--

CREATE TABLE `user_details` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone_number` varchar(45) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user_details`
--

INSERT INTO `user_details` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `user_id`) VALUES
(1, 'Deuzito', 'Souza', 'deuziito@gmail.com', '0834274000', 16),
(15, 'Callum', 'Dunne', 'cal.dunne@gmail.com', '0890323030', 17);

-- --------------------------------------------------------

--
-- Estrutura da tabela `vehicle`
--

CREATE TABLE `vehicle` (
  `id` int(11) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `year` int(11) NOT NULL,
  `registration` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `engine_type` varchar(45) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `vehicle`
--

INSERT INTO `vehicle` (`id`, `brand`, `model`, `year`, `registration`, `color`, `engine_type`, `user_id`) VALUES
(1, 'BMW', 'D240', 2020, '201-DUB-2031', 'Gray', 'Diesel', 12),
(11, 'Mercedes', 'MC-30', 2015, '151-KIL-2031', 'Gray', 'Hybrid', 13);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_booking_user1_idx` (`user_id`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Índices para tabela `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_details_user_idx` (`user_id`);

--
-- Índices para tabela `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_vehicle_user1_idx` (`user_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
