-- --------------------------------------------------------
-- Host:                         cmmproject.localhost
-- Server version:               5.7.28-0ubuntu0.18.04.4 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table laraveltestproject.failed_jobs: ~0 rows (approximately)
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Dumping data for table laraveltestproject.migrations: ~4 rows (approximately)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(4, '2020_02_02_111531_create_news_table', 2),
	(5, '2020_02_02_135914_create_pages_table', 3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Dumping data for table laraveltestproject.news: ~5 rows (approximately)
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` (`id`, `user_id`, `title`, `body`, `publish_date`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Zeerobben zijn de saaiste dieren', 'Morbi faucibus neque gravida, auctor lacus sed, accumsan metus. In dictum semper justo eget luctus. Phasellus enim urna, scelerisque a blandit vitae, semper ac nisl. Vivamus in faucibus eros, sed placerat magna. c leo arcu, sagittis at aliquet eu, gravida eu felis. Donec nec molestie urna. Vestibulum interdum ex ac tellus euismod, et egestas sem cursus. Pellentesque et neque eu lectus aliquam lacinia. Donec id faucibus velit, eu auctor.', '2020-04-16', '2020-04-16 10:00:00', '2020-04-16 10:00:00'),
	(2, 1, 'Bananen liggen krom om appelgrap', 'Sed semper, tortor vitae venenatis varius, ex tellus volutpat lorem, et convallis diam ex nec libero. Donec facilisis nunc id arcu molestie, id rhoncus nisi dictum. Maecenas malesuada lacus nec nunc finibus, ac lobortis enim laoreet. Etiam condimentum eu ex a hendrerit. Fusce pellentesque interdum ipsum, sit amet ultricies nulla tristique in. Suspendisse vehicula augue ac felis pulvinar hendrerit. Duis erat massa, auctor ac facilisis at, ornare ac quam.', '2020-04-16', '2020-04-16 10:02:00', '2020-04-16 10:02:00'),
	(3, 1, 'Haring is goed tegen wondroos', 'Maecenas fringilla accumsan suscipit. Nunc nibh enim, commodo eget erat et, aliquet tincidunt tortor. Aliquam eget metus auctor, placerat nisi et, venenatis nibh. Nullam odio sapien, semper id sodales quis, vestibulum egestas turpis. Morbi tincidunt est elit, ut tempus tellus gravida ut. Suspendisse potenti. Duis porttitor, nulla sed pellentesque aliquet, ante felis placerat sem, sed consectetur elit augue at eros. Nulla non malesuada metus, sit amet convallis magna.', '2020-04-16', '2020-04-16 10:04:00', '2020-04-16 10:04:00'),
	(4, 1, 'Wat een slechte berichtgeving in Latijn', 'Maecenas sed lectus a nunc tincidunt porta. Sed iaculis quam felis, vel varius nisl ullamcorper sed. Vivamus blandit ex ac velit luctus, nec suscipit dolor luctus. Donec erat diam, elementum sed mi in, consectetur efficitur turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris blandit diam rutrum pellentesque vehicula. Phasellus at mauris ac lorem auctor sagittis. Morbi varius tincidunt erat, vitae fringilla lorem commodo sit amet. Praesent ut porta libero.', '2020-04-16', '2020-04-16 10:06:00', '2020-04-16 10:06:00'),
	(5, 1, 'Iets over zeehonden wat heel tof is', 'Integer ante magna, auctor viverra justo et, eleifend pulvinar urna. Vestibulum arcu ante, convallis eu ex nec, efficitur auctor odio. Nunc ornare aliquet interdum. Fusce ut urna varius nunc rutrum maximus. Suspendisse sodales eleifend felis nec ultrices. Mauris eget aliquet magna. Sed ullamcorper efficitur dapibus. Fusce tempus fermentum interdum. Duis nec purus eu ligula egestas viverra. Morbi mollis, odio nec iaculis accumsan, leo nibh vulputate massa, ut sodales libero diam eu leos.', '2020-04-16', '2020-04-16 10:08:00', '2020-04-18 22:46:46');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;

-- Dumping data for table laraveltestproject.pages: ~3 rows (approximately)
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` (`id`, `title`, `url`, `body`, `active`, `user_id`, `created_at`, `updated_at`) VALUES
	(1, 'Over ons', 'over_ons', 'Over ons maecenas vel dapibus urna. Phasellus vitae quam bibendum, pretium ligula at, vulputate metus. Sed malesuada turpis nisl, ut suscipit neque facilisis nec. Phasellus eu mollis leo. Pellentesque fringilla cursus molestie. Cras molestie volutpat magna, id euismod tellus dictum quis. Cras ultrices elit sit amet sollicitudin tempor. Proin ornare, nunc eu accumsan tristique, libero tortor commodo massa, vel dapibus turpis odio id enim. Curabitur varius imperdiet felis, a facilisis elit ornare non. Vestibulum consectetur risus a malesuada elementum. Nam ac nulla gravida, rutrum purus eget, semper massa.', 1, 0, '2020-01-19 19:00:00', '2020-01-19 19:00:00'),
	(2, 'Contact', 'contact', 'Dit is de contact pagina sed non nibh in mauris placerat tincidunt at vehicula mi. In porta sapien non ante suscipit, non ullamcorper magna tincidunt. Suspendisse maximus, elit vehicula pretium varius, eros libero faucibus ex, et tristique diam purus ac ex. In fermentum justo pulvinar velit rhoncus, eu facilisis tellus maximus. Pellentesque congue erat sodales justo tristique molestie. Nam quis mi non magna rutrum euismod. In sed rutrum justo, eget varius enim. Fusce egestas quam nec massa vestibulum, at bibendum est consequat. Aenean et lorem in neque rutrum posuere. Aliquam varius ultricies sagittis.', 1, 0, '2020-01-19 19:00:00', '2020-01-19 19:00:00'),
	(3, 'Welkom', 'welkom', 'Nunc et elit blandit, ultricies nisi eu, commodo lectus. Etiam purus ligula, facilisis ac varius in, sodales vel quam. In hac habitasse platea dictumst.', 1, 0, '2020-01-19 19:00:00', '2020-01-19 19:00:00');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;

-- Dumping data for table laraveltestproject.password_resets: ~0 rows (approximately)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Dumping data for table laraveltestproject.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
