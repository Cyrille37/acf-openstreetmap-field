ACF OpenStreetMap Field
=======================

This is the official github repository of the [ACF OpenStreetMap Field](https://wordpress.org/plugins/acf-openstreetmap-field/) plugin.

About
-----

Configurable OpenStreetMap or Leaflet Field in ACF.  
Requires ACF 5.7+

Features
--------
 - Configurable Map-Tile Provider
 - Selectable Map Overlays
 - Multiple Markers
 - Ready-to-use HTML-Output
 - Custom map markers [through WordPress filters](../../wiki/HTML-Marker-Icon) and JS Events.


Installation
------------

#### In WP Admin
Just follow the [Automatic Plugin Installation](https://wordpress.org/support/article/managing-plugins/#automatic-plugin-installation) procedere.

#### WP-CLI
```shell
wp plugin install --activate acf-openstreetmap-field
```

#### Using composer
```
composer require mcguffin/acf-openstreetmap-field
```

### Development
```shell
git clone git@github.com:mcguffin/acf-openstreetmap-field.git
cd acf-openstreetmap-field
npm install
npm run dev
```

Usage
-----
There is some developer centric documentation in the [wiki](../../wiki).

Development
-----------
npm scripts:
 - `npm run dev`: Watch css and js soure dirs
 - `npm run test`: load some test fields
 - `npm run dev-test`: load some test fields and watch css and js soure dirs
 - `npm run dashicons`: Generate dashicons scss variables from source
 - `npm run i18n`: generate `.pot` file
 - `npm run rollback`: remove last commit (local and remote  – use with caution!)

Thanks
------
This plugin wouldn't have been possible without these awesome people and Projects:

 - Jan Pieter Waagmeester ([Leaflet Providers](https://github.com/leaflet-extras/leaflet-providers))
 - Per Liedman ([Leaflet Control Geocode](https://github.com/perliedman/leaflet-control-geocoder))
 - The entire [Leaflet](https://leafletjs.com/) Project

## Cyrille37 changes

### override Geocode results format

Geocode results format are set with translation for localisation. But in some case, we don't mind localisation and want specific formats.

So, in `wp-config.php` we can override the 3 formats for the address:

```php
define('ACF_OSM_I18N_ADDR_STREET','{building} {house_number} {road}');
define('ACF_OSM_I18N_ADDR_CITY','{village} {town} {city}');
define('ACF_OSM_I18N_ADDR_COUNTRY','');
```

[Issue #1](https://github.com/Cyrille37/acf-openstreetmap-field/issues/1)

### Map view on marker after geocoding #2

When `maxMarkers == 1` the map's view zoom is set on the marker and zoom aroud it.

[Issue #2](https://github.com/Cyrille37/acf-openstreetmap-field/issues/2)

