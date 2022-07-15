-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: practicaltest
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `id` bigint NOT NULL,
  `approval_status` varchar(200) DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `pag_value` double NOT NULL,
  `project_title` varchar(200) DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `total_contribution` double NOT NULL,
  `total_expenditure` double NOT NULL,
  `total_psc` double NOT NULL,
  `fund_id` bigint NOT NULL,
  `lead_org_unit_id` bigint NOT NULL,
  `paascode_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKblt51ihy6q071e7so4jd6ob1a` (`fund_id`),
  KEY `FKnjagj3bhrwpwt0fb2llvwbixb` (`lead_org_unit_id`),
  KEY `FK6c9n3vmov7utcdsgubd067snv` (`paascode_id`),
  CONSTRAINT `FK6c9n3vmov7utcdsgubd067snv` FOREIGN KEY (`paascode_id`) REFERENCES `paascode` (`id`),
  CONSTRAINT `FKblt51ihy6q071e7so4jd6ob1a` FOREIGN KEY (`fund_id`) REFERENCES `fund` (`id`),
  CONSTRAINT `FKnjagj3bhrwpwt0fb2llvwbixb` FOREIGN KEY (`lead_org_unit_id`) REFERENCES `lead_org_unit` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (10,NULL,'2022-07-15 10:47:24',456,'CC','2022-07-15 10:47:24',34,67,34,1,3,8);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-15 14:05:25
