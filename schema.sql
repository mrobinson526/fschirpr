/*
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` text,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `chirps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `content` varchar(45) NOT NULL,
  `location` varchar(45) DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_id` (`userid`),
  CONSTRAINT `fk_id` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE `mentions` (
  `userid` int NOT NULL,
  `chirpid` int NOT NULL,
  PRIMARY KEY (`userid`,`chirpid`),
  KEY `fk_chirpid` (`chirpid`),
  CONSTRAINT `fk_chirpid` FOREIGN KEY (`chirpid`) REFERENCES `chirps` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

*/