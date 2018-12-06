FROM php:7.0-apache

COPY ./index.html /var/www/html/
COPY ./hasher.php /var/www/html/
COPY ./script.js /var/www/html/
COPY ./README.md /var/www/html/
COPY ./LICENSE /var/www/html/
