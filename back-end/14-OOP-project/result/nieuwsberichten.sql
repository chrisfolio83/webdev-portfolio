-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Gegenereerd op: 15 apr 2020 om 17:57
-- Serverversie: 5.7.18-0ubuntu0.16.04.1
-- PHP-versie: 7.0.18-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nieuwsberichten`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `nieuwsberichten`
--

CREATE TABLE `nieuwsberichten` (
  `id` int(11) NOT NULL,
  `titel` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT '1',
  `publicatie_datum` datetime DEFAULT CURRENT_TIMESTAMP,
  `content` text NOT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `nieuwsberichten`
--

INSERT INTO `nieuwsberichten` (`id`, `titel`, `user_id`, `publicatie_datum`, `content`, `url`) VALUES
(1, 'Iets over zeehonden wat heel tof is', 6, '2020-02-07 12:53:00', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan elementum accumsan. Proin rutrum, neque et dignissim ultricies, libero\r\n nulla iaculis dolor, ac semper elit libero quis risus. Fusce at neque leo. Aenean metus ex, commodo sit amet augue lobortis, cursus condimentum odio.\r\n Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis leo risus, fringilla eu erat eget, tincidunt eleifend nunc.\r\n Quisque eget vestibulum nibh, non pretium lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent\r\nlaoreet, justo pharetra semper tempor, lectus tortor facilisis ex, ut placerat est tellus vitae ante. Etiam convallis, nibh in consequat placerat, leo\r\n est condimentum enim, nec fermentum massa nulla sit amet augue. Ut ultrices nec neque eget sagittis. Vestibulum sit amet velit sit amet elit ultrices\r\n facilisis. Suspendisse potenti. Mauris ullamcorper id velit vel aliquet. Sed sagittis diam non augue ullamcorper sagittis. Ut dolor mi, sollicitudin\r\n vitae mi ac, venenatis ultrices dui.', 'iets-over-zeehonden-wat-heel-tof-is'),
(2, 'Er gebeurt iets raars met de aarde', 2, '2020-02-07 12:53:02', 'in ultrices facilisis imperdiet. Etiam scelerisque ligula a aliquam posuere. Ut libero libero, luctus consequat pulvinar scelerisque, blandit et lectus.\n Etiam a nisi convallis, blandit justo eu, mattis urna. Sed tincidunt, est a tempus tempus, eros lectus maximus sapien, eu accumsan neque ex in erat. In\n eget lacus bibendum mi viverra placerat. Donec cursus accumsan ullamcorper. Vivamus a sagittis sapien, non semper sapien. Quisque facilisis rhoncus\n lorem, sed posuere ipsum molestie at. Nullam lacinia leo vel mauris vestibulum, eu fermentum nibh maximus. Mauris libero sem, accumsan id egestas a,\n sollicitudin vehicula augue. Cras scelerisque dolor mi, at sodales enim condimentum eu.', 'er-gebeurt-iets-raars-met-de-aarde'),
(3, 'vandaag is het Vrijdag en ik verveel me', 3, '2020-02-07 12:53:04', 'Proin scelerisque lorem et nisl laoreet, ac venenatis tortor placerat. In lacinia eros vel volutpat volutpat. Sed in semper diam. Nulla porta sem est, ut\n molestie lectus porta ut. Ut blandit quam vel mi commodo, vitae pharetra odio tempus. Donec luctus purus dolor, et porta nisl gravida id. Vestibulum\n in nulla dignissim, maximus sapien at, aliquam eros. Maecenas id justo non nunc malesuada ultricies. Ut lobortis nunc et ornare varius. Maecenas\n viverra ex id congue finibus. Praesent viverra ut felis quis blandit. Sed a urna in diam ullamcorper dapibus vitae vel nulla. Curabitur dignissim tellus\n ex, id imperdiet nulla varius sed. Aenean gravida ligula non tellus accumsan, non pellentesque leo fringilla.', 'vandaag-is-het-vrijdag-en-ik-verveel-me'),
(4, 'Wat een slechte berichtgeving in Latijn', 4, '2020-02-07 12:53:06', 'Vivamus fermentum risus turpis, ac dapibus neque vulputate sed. Ut venenatis ut quam a volutpat. Integer ante magna, auctor viverra justo et, eleifend\r\n pulvinar urna. Vestibulum arcu ante, convallis eu ex nec, efficitur auctor odio. Nunc ornare aliquet interdum. Fusce ut urna varius nunc rutrum maximus.\r\n Suspendisse sodales eleifend felis nec ultrices. Mauris eget aliquet magna. Sed ullamcorper efficitur dapibus. Fusce tempus fermentum interdum. Duis\r\n nec purus eu ligula egestas viverra. Morbi mollis, odio nec iaculis accumsan, leo nibh vulputate massa, ut sodales libero diam eu leo.', 'wat-een-slechte-berichtgeving-in-latijn'),
(5, 'Geen hoop meer door Coronavirus', 1, '2020-02-07 12:53:08', 'Cras arcu nisl, aliquam et tincidunt at, varius eu augue. Maecenas sed lectus a nunc tincidunt porta. Sed iaculis quam felis, vel varius nisl ullamcorper\n sed. Vivamus blandit ex ac velit luctus, nec suscipit dolor luctus. Donec erat diam, elementum sed mi in, consectetur efficitur turpis. Interdum et\n malesuada fames ac ante ipsum primis in faucibus. Mauris blandit diam rutrum pellentesque vehicula. Phasellus at mauris ac lorem auctor sagittis. Morbi\n varius tincidunt erat, vitae fringilla lorem commodo sit amet. Praesent ut porta libero.', 'geen-hoop-meer-door-coronavirus'),
(6, 'Haring is goed tegen wondroos', 5, '2020-02-07 12:53:10', 'Maecenas neque sapien, placerat at euismod nec, sagittis at felis. Phasellus enim dui, tempus cursus turpis pharetra, vulputate iaculis sapien. Nulla\r\n convallis ornare lacus, nec rhoncus risus pretium sit amet. Aliquam convallis diam magna, ac efficitur nisl tristique maximus. Aliquam id fringilla\r\n turpis, volutpat semper lectus. Proin iaculis accumsan erat nec semper. Phasellus quis neque in risus aliquet volutpat quis in quam. Praesent eget lorem\r\n sed enim tincidunt lacinia. Maecenas fringilla accumsan suscipit. Nunc nibh enim, commodo eget erat et, aliquet tincidunt tortor. Aliquam eget metus\r\n auctor, placerat nisi et, venenatis nibh. Nullam odio sapien, semper id sodales quis, vestibulum egestas turpis. Morbi tincidunt est elit, ut tempus\r\n tellus gravida ut. Suspendisse potenti. Duis porttitor, nulla sed pellentesque aliquet, ante felis placerat sem, sed consectetur elit augue at eros.\r\n Nulla non malesuada metus, sit amet convallis magna.', 'haring-is-goed-tegen-wondroos'),
(7, 'Bananen liggen krom om appelgrap', 7, '2020-02-07 12:53:12', 'Sed semper, tortor vitae venenatis varius, ex tellus volutpat lorem, et convallis diam ex nec libero. Donec facilisis nunc id arcu molestie, id rhoncus\r\n nisi dictum. Maecenas malesuada lacus nec nunc finibus, ac lobortis enim laoreet. Etiam condimentum eu ex a hendrerit. Fusce pellentesque interdum\r\n ipsum, sit amet ultricies nulla tristique in. Suspendisse vehicula augue ac felis pulvinar hendrerit. Duis erat massa,\r\n auctor ac facilisis at, ornare ac quam.', 'bananen-liggen-krom-om-appelgrap'),
(8, 'Zeerobben zijn de saaiste dieren', 8, '2020-02-07 12:53:14', 'Morbi faucibus neque gravida, auctor lacus sed, accumsan metus. In dictum semper justo eget luctus. Phasellus enim urna, scelerisque a blandit vitae,\r\n semper ac nisl. Vivamus in faucibus eros, sed placerat magna. Nulla facilisi. Duis non sapien felis. Sed hendrerit massa ac quam mattis, vitae malesuada\r\n neque feugiat. Cras varius dui at fermentum rhoncus. Morbi sed magna bibendum, pulvinar lectus eget, pharetra ipsum. Donec leo arcu, sagittis at\r\n aliquet eu, gravida eu felis. Donec nec molestie urna. Vestibulum interdum ex ac tellus euismod, et egestas sem cursus. Pellentesque et neque eu lectus\r\n aliquam lacinia. Donec id faucibus velit, eu auctor...', 'zeehonden-zijn-de-saaiste-dieren');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `schrijvers`
--

CREATE TABLE `schrijvers` (
  `id` int(11) NOT NULL,
  `naam` varchar(50) NOT NULL DEFAULT '',
  `wachtwoord` char(32) NOT NULL DEFAULT '',
  `telefoon` varchar(40) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `schrijvers`
--

INSERT INTO `schrijvers` (`id`, `naam`, `wachtwoord`, `telefoon`, `email`) VALUES
(1, 'Christian', '371620aa75830b1388b63305b0d42f06', '088-1881521', 'christian@writersblock.nl'),
(2, 'Piet', 'a4ef76c127ea3fc9433a0c08a38051de', '088-1881523', 'piet@writersblock.nl'),
(3, 'Mildred', 'dbfcdd3a1ef5186a3e098332b499070a', '088-1881522', 'mildred@writersblock.nl'),
(4, 'Anton', 'dbfcdd3a1ef5186a3e098332b499070a', '088-1881528', 'anton@writersblock.nl'),
(5, 'Chip', 'dbfcdd3a1ef5186a3e098332b499070a', '088-1881529', 'chip@writersblock.nl'),
(6, 'Danny', 'dbfcdd3a1ef5186a3e098332b499070a', '088-1881527', 'danny@writersblock.nl'),
(7, 'Tony', 'dbfcdd3a1ef5186a3e098332b499070a', '088-1881520', 'tony@writersblock.nl'),
(8, 'Paulus', 'dbfcdd3a1ef5186a3e098332b499070a', '088-1881524', 'paulus@writersblock.nl');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `nieuwsberichten`
--
ALTER TABLE `nieuwsberichten`
  ADD PRIMARY KEY (`id`),
  ADD KEY `schrijver_id` (`user_id`);

--
-- Indexen voor tabel `schrijvers`
--
ALTER TABLE `schrijvers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `nieuwsberichten`
--
ALTER TABLE `nieuwsberichten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT voor een tabel `schrijvers`
--
ALTER TABLE `schrijvers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `nieuwsberichten`
--
ALTER TABLE `nieuwsberichten`
  ADD CONSTRAINT `schrijver_id` FOREIGN KEY (`user_id`) REFERENCES `schrijvers` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
